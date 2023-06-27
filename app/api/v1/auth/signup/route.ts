import { NextResponse, NextRequest } from "next/server";
import { hash } from "bcryptjs";

import { connect } from "@lib/mongodb";

import { type IUser, User } from "@models/User";
import { randomUUID } from "crypto";

export async function POST ( req: Request ) {
    
    // make initial connection to mongodb
    connect().catch(
        err => {
            console.log(err);
            return NextResponse.json (
                {
                    message: err,
                    status: 500
                }
            );
        }
    )
    
    const data = await req.json() as unknown as IUser
    
    
    
    // destructure request data into required params of User model
    const { username, password, email } = data
    
    // check if all the data is provided
    
    if (
        !data || !username || !password || !email
    ) {
        return new NextResponse (
            "One or more fields are missing",
            {
                status: 400
            }
        );

    }
    
    // does user exist
    
    if (
        await User.findOne( { email } )
    ) {
        return new NextResponse (
            
            "Email is already in use",
            {
                status: 409
            }
            
        )
    }
    
    if (
        await User.findOne( { username } )
    ) {
        return new NextResponse (
            "Username is already in use",
            {
                status: 409
            }
        )
    }
    
    // other checks
    
    if (
        password.length < 6
    ) {
        return new NextResponse (
            "Password should be atleast 6 characters long",
            {
                status: 409
            }
        )
    }
    
    // hash password and create user
    
    const hashedPassword: string = await hash(password, 12)
    
    const userData = {
        username,
        password: hashedPassword,
        email,
        id: randomUUID()
    }
    
    const user = new User (
        userData
    )
    
    await user.save()
    
    return NextResponse.json(
        {
            success: true,
            user: userData,
        }
    )
    
    
}