'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import Protected from '@components/auth/protected'


export default function Profile () {
    const session = useSession()

    return (
        <>
            <Protected session={session}>
                {JSON.stringify(session)}
            </Protected>
        </>
    )
}