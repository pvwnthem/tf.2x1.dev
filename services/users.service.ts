'use server'
import { connect } from "@lib/mongodb";
import { User } from "@models/User";

export async function getUserByName(username: string) {
    try {
        await connect();

        const user = await User.findOne({ username });

        return JSON.parse(JSON.stringify(user));
    } catch (error) {
        console.error("Couldn't get user: ", error);
    }
}