/** @format */

'use client'
import Wrapper from '@components/auth/Wrapper'
import { Navbar } from '@components/navigation/navbar'
import Title from '@components/pages/title'
import { useSession } from 'next-auth/react'

export default function Home() {
    const session = useSession()
    return (
        <div className='bg-background'>
            <Wrapper session={session}>
                <Navbar />
                <Title />
            </Wrapper>
        </div>
    )
}
