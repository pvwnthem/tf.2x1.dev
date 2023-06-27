'use client'
import RedirectIfAuth from "@components/auth/redirectIfAuth"
import SignupForm from "@components/forms/SignupForm"
import { useSession } from "next-auth/react"
import React from "react"

export default function Signup () {
    const session = useSession()
    
    return (
        <RedirectIfAuth target={"/profile"} session={session}>
            <SignupForm />
        </RedirectIfAuth>
    )
}