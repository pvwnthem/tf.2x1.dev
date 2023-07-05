/** @format */

import { NextResponse, NextRequest } from 'next/server'
import { hash } from 'bcryptjs'

import { connect } from '@lib/mongodb'
import { type IUser, User } from '@models/User'
import { Verify } from '@models/Verify'
import { sendVerificationRequest } from '@services/email.service'
import { uuid } from 'uuidv4'
import { images } from '@constants/images'

export async function POST(req: Request) {
    const url = new URL(req.url)

    const data = (await req.json()) as unknown as IUser

    // destructure request data into required params of User model
    const { password, email } = data
    const username = data.username.toLowerCase()

    // check if all the data is provided

    if (!data || !username || !password || !email) {
        return new NextResponse('One or more fields are missing', {
            status: 400,
        })
    }

    try {
        // make initial connection to mongodb
        await connect()

        const userExists = await User.findOne({
            $or: [{ email }, { username }],
        })

        if (userExists) {
            if (userExists.email === email) {
                return new NextResponse('Email is already in use', {
                    status: 409,
                })
            }

            return new NextResponse('Username is already in use', {
                status: 409,
            })
        }

        if (password.length < 6) {
            return new NextResponse(
                'Password should be at least 6 characters long',
                {
                    status: 409,
                }
            )
        }

        // hash password and create user
        const hashedPassword: string = await hash(password, 12)

        // set random image as pfp

        const randomIndex = Math.floor(Math.random() * images.length)
        const image = images[randomIndex]

        const id = uuid()
        const token = uuid()

        const userData = {
            username,
            password: hashedPassword,
            email,
            profilePicture: image,
            id,
        }

        const user = new User(userData)
        await user.save()

        const verify = new Verify({
            id,
            token,
        })
        await verify.save()

        const baseUrl = `${url.protocol}//${url.hostname}:${url.port}`
        await sendVerificationRequest({ identifier: email, token, baseUrl })

        return NextResponse.json({
            success: true,
            user: userData,
        })
    } catch (err) {
        return NextResponse.json({
            message: err,
            status: 500,
        })
    }
}
