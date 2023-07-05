/** @format */

'use client'
import Wrapper from '@components/auth/Wrapper'
import EmailProtected from '@components/auth/emailProtected'
import Protected from '@components/auth/protected'
import NewPostForm from '@components/forms/NewPostForm'
import { Navbar } from '@components/navigation/navbar'
import { useSession } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function NewPost() {
    const session = useSession()
    const query = useSearchParams()

    return (
        <Wrapper session={session}>
            <Protected session={session}>
                <EmailProtected session={session}>
                    <Navbar />
                    <NewPostForm
                        category={query.get('category') as string}
                        session={session}
                    />
                </EmailProtected>
            </Protected>
        </Wrapper>
    )
}
