'use client'
import React from 'react'
import { useSession } from 'next-auth/react'


export default function Profile () {
    const session = useSession()

    return (
        <>
            {JSON.stringify(session)}
        </>
    )
}