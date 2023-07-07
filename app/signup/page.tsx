/** @format */

'use client'
import RedirectIfAuth from '@components/auth/redirectIfAuth'
import SignupForm from '@components/forms/SignupForm'
import BackButton from '@components/navigation/back'
import { useSession } from 'next-auth/react'

export default function Signup() {
    const session = useSession()

    return (
        <RedirectIfAuth target={'/profile'} session={session}>
            <BackButton />
            <SignupForm />
        </RedirectIfAuth>
    )
}
