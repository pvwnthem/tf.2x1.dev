import { NextResponse, NextRequest } from "next/server";
import { hash } from "bcryptjs";

import { connect } from "@lib/mongodb";
import fs from "fs";

import { type IUser, User } from "@models/User";
import { randomUUID } from "crypto";
import { getRandomIndex } from "@services/util.service";
import { Verify } from "@models/Verify";
import { sendVerificationRequest } from "@services/email.service";

export async function POST(req: Request) {
    // make initial connection to mongodb
    connect().catch((err) => {
        console.log(err);
        return NextResponse.json({
            message: err,
            status: 500,
        });
    });

    const data = (await req.json()) as unknown as IUser;

    // destructure request data into required params of User model
    const { username, password, email } = data;

    // check if all the data is provided

    if (!data || !username || !password || !email) {
        return new NextResponse("One or more fields are missing", {
            status: 400,
        });
    }

    // does user exist

    if (await User.findOne({ email })) {
        return new NextResponse("Email is already in use", {
            status: 409,
        });
    }

    if (await User.findOne({ username })) {
        return new NextResponse("Username is already in use", {
            status: 409,
        });
    }

    // other checks

    if (password.length < 6) {
        return new NextResponse(
            "Password should be atleast 6 characters long",
            {
                status: 409,
            }
        );
    }

    // hash password and create user

    const hashedPassword: string = await hash(password, 12);

    // set random image as pfp

    const images: string[] = [
        "https://i.imgur.com/JL92Jwq.png",
        "https://i.imgur.com/3ZdzSOF.png",
        "https://i.imgur.com/HNZ8nwn.png",
        "https://i.imgur.com/OrBukhd.png",
        "https://i.imgur.com/kcyIMoM.png",
    ];

    const image = images[getRandomIndex(images)];

    const id = randomUUID()
    const token = randomUUID()

    const userData = {
        username,
        password: hashedPassword,
        email,
        profilePicture: image,
        id
    };

    const user = new User(userData);

    await user.save();

    const verify = new Verify({
        id,
        token
    })

    await verify.save();

    await sendVerificationRequest({identifier: email, token, baseUrl: req.url})

    return NextResponse.json({
        success: true,
        user: userData,
    });
}
