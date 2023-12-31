/** @format */

import { Schema, model, models, Document } from 'mongoose'

export interface IUser extends Document {
    email: string
    username: string
    password: string
    id: string
    description: string
    profilePicture: string
    role: string
    title: string
    verified: boolean
    xp: number | string
    level: number
    notifications: string[]
    createdAt: Date
    lastChangedName: Date
}

export interface INotification {
    type: 'xp' | 'reply' | 'like'
    message: string
    amount?: number
    href?: string
}

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required'],
        /*
                A valid e-mail address is a string that matches the ABNF production […].

                Note: This requirement is a willful violation of RFC 5322, which defines a syntax for e-mail addresses that is simultaneously too strict (before the “@” character),
                too vague (after the “@” character), and too lax (allowing comments, whitespace characters,
                and quoted strings in manners unfamiliar to most users) to be of practical use here.
            */
        match: [
            /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
            'Invalid Email',
        ],
    },

    username: {
        type: String,
        unique: true,
        required: [true, 'Username is required'],
        minLength: [2, 'Username should be atleast 2 characters long'],
        maxLength: [16, 'Username should be no longer than 16 characters'],
    },

    password: {
        type: String,
        required: [true, 'Password is required'],
        select: false,
    },

    id: {
        type: String,
        required: true,
        unique: true,
    },

    description: {
        type: String,
        required: false,
        default:
            'Hi, I am a tf.2x1.dev user that has not yet changed their description!',
    },

    profilePicture: {
        type: String,
        required: false,
        default: '',
    },

    role: {
        type: String,
        required: false,
        default: 'user',
    },

    title: {
        type: String,
        required: false,
        default: 'Beginner',
    },

    verified: {
        type: Boolean,
        required: false,
        default: false,
    },

    xp: {
        type: Number,
        required: false,
        default: 0,
    },

    level: {
        type: Number,
        required: false,
        default: 1,
    },

    lastChangedName: {
        type: Date,
        required: false,
        default: Date.now(),
    },

    createdAt: {
        type: Date,
        required: false,
        default: Date.now(),
    },

    notifications: {
        type: Array,
        required: false,
        default: [],
    },
})

export const User = models.User || model<IUser>('User', userSchema)
