import mongoose, { Schema, model, models, Document } from "mongoose";
import * as crypto from "crypto";

export interface IUser extends Document {
    email : string,
    username: string,
    password: string,
    id: string,
    description: string | null,
    profilePicture: string | null,
    role: string
    verified: boolean
}

const userSchema = new Schema(
    {
        email: {
            type: String,
            unique: true,
            required: [ true, "Email is required" ],
            /*
                A valid e-mail address is a string that matches the ABNF production […].

                Note: This requirement is a willful violation of RFC 5322, which defines a syntax for e-mail addresses that is simultaneously too strict (before the “@” character),
                too vague (after the “@” character), and too lax (allowing comments, whitespace characters,
                and quoted strings in manners unfamiliar to most users) to be of practical use here.
            */
            match: [ /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, "Invalid Email" ]
        },
        
        username: {
            type: String,
            unique: true,
            required: [ true, "Username is required" ],
            minLength: [ 2, "Username should be atleast 2 characters long" ],
            maxLength: [ 16, "Username should be no longer than 16 characters" ]
        },
        
        password: {
            type: String,
            required: [ true, "Password is required" ],
            select: false
        },
        
        id: {
            type: String,
            required: true,
            unique: true,
        },
        
        description: {
            type: String,
            required: false,
            default: ""
        },

        profilePicture: {
            type: String,
            required: false,
            default: ""
        },

        role: {
            type: String,
            required: false,
            default: "user"
        },

        verified: {
            type: Boolean,
            required: false,
            unique: false,
            default: false
        }
    }
);

export const User = models.User || model<IUser>("User", userSchema);
