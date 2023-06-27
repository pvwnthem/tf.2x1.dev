'use client'
import RedirectIfAuth from "@components/auth/redirectIfAuth"
import LoginForm from "@components/forms/LoginForm"
import { useSession } from "next-auth/react"
import React from "react"

export default function Signup () {

    const session = useSession()
    
    return (
        <RedirectIfAuth target={"/profile"} session={session}>
            <LoginForm />
        </RedirectIfAuth>
    )
}