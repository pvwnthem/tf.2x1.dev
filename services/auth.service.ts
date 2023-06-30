import { connect } from "@lib/mongodb";
import { User } from "@models/User";
import { Verify } from "@models/Verify";
import { signIn } from "next-auth/react";

export const loginUser = async ({
    email,
    password,
}: {
    email: string;
    password: string;
}) => {
    const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
    });

    return res;
};
