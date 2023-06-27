'use client'
import React from 'react'
import AuthError from './errors/AuthError'

export default function Protected ( { children, session } : { children: React.ReactNode, session: any } ) {
    
    return (
        <>
            { session.status === "authenticated" ? (
                { children }
            ): <AuthError /> }
        </>
    )
}