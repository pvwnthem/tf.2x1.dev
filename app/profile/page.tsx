/** @format */

'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import Protected from '@components/auth/protected'
import Wrapper from '@components/auth/Wrapper'
import ProfilePage from '@components/pages/profile'
import BackButton from '@components/navigation/back'
import EmailProtected from '@components/auth/emailProtected'

export default function Profile() {
    const session = useSession()

    return (
        <>
            <Wrapper session={session}>
                <Protected session={session}>
                    <EmailProtected session={session}>
                        <BackButton />
                        <ProfilePage session={session} />
                    </EmailProtected>
                </Protected>
            </Wrapper>
        </>
    )
}
