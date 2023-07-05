'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import Protected from '@components/auth/protected'
import Wrapper from '@components/auth/Wrapper'
import BackButton from '@components/navigation/back'
import EmailProtected from '@components/auth/emailProtected'
import ForumPage from '@components/pages/forum'
import { Navbar } from '@components/navigation/navbar'

export default function Forum() {
    const session = useSession()

    return (
        <>
            <Wrapper session={session}>
                <Protected session={session}>
                    <EmailProtected session={session}>
                        <Navbar overlapsNot={true} />
                        <ForumPage session={session} />
                    </EmailProtected>
                </Protected>
            </Wrapper>
        </>
    )
}
