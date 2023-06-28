"use client";
import RedirectIfAuth from "@components/auth/redirectIfAuth";
import LoginForm from "@components/forms/LoginForm";
import BackButton from "@components/navigation/back";
import { useSession } from "next-auth/react";
import React from "react";

export default function Signup() {
    const session = useSession();

    return (
        <RedirectIfAuth target={"/profile"} session={session}>
            <BackButton />
            <LoginForm />
        </RedirectIfAuth>
    );
}
