'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import Protected from '@components/auth/protected'
import Wrapper from '@components/auth/Wrapper'


export default function Profile () {
    const session = useSession()

    return (
        <>
        <Wrapper session={session}>
            <Protected session={session}>
                {JSON.stringify(session)}
            </Protected>
        </Wrapper>
        </>
    )
}