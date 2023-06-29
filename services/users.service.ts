"use server";

import { connect } from "@lib/mongodb";
import { User } from "@models/User";

export async function setUsername(id: string, newUsername: string) {
    try {
        await connect();

        const user = await User.findOneAndUpdate(
            { id },
            { username: newUsername }
        );

        return JSON.parse(JSON.stringify(user));
    } catch (error) {
        console.error("Couldn't set username: ", error);
    }
}

export async function getUser(id: string) {
    try {
        await connect();

        const user = await User.findOne({ id }).maxTimeMS(5000);

        return JSON.parse(JSON.stringify(user));
    } catch (error) {
        console.error("Couldn't get user: ", error);
    }
}

export async function getUserByName(username: string) {
    try {
        await connect();

        const user = await User.findOne({ username });

        return JSON.parse(JSON.stringify(user));
    } catch (error) {
        console.error("Couldn't get user: ", error);
    }
}
