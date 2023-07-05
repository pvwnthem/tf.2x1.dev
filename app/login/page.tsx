"use client";
import RedirectIfAuth from "@components/auth/redirectIfAuth";
import LoginForm from "@components/forms/LoginForm";
import BackButton from "@components/navigation/back";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function Login() {
    const session = useSession();
    const query = useSearchParams()

    return (
        <RedirectIfAuth target={query.get('redirectPath') || "/profile"} session={session}>
            <BackButton />
            <LoginForm redirectPath={query.get('redirectPath') || "/profile"} />
        </RedirectIfAuth>
    );
}
