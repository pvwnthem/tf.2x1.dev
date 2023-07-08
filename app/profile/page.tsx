/** @format */

'use client'
import { useSession } from 'next-auth/react'
import Protected from '@components/auth/protected'
import Wrapper from '@components/auth/Wrapper'
import ProfilePage from '@components/pages/profile'
import { Navbar } from '@components/navigation/navbar'
import EmailProtected from '@components/auth/emailProtected'

export default function Profile() {
    const session = useSession()

    return (
        <>
            <Wrapper session={session}>
                <Protected session={session}>
                    <EmailProtected session={session}>
                        <Navbar />
                        <ProfilePage session={session} />
                    </EmailProtected>
                </Protected>
            </Wrapper>
        </>
    )
}
