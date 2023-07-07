/** @format */

'use client'
import { useRouter } from 'next/navigation'

export interface props {
    children: any
    session: any
    target: any
}

export default function RedirectIfAuth(props: props) {
    const { push } = useRouter()

    return (
        <>
            {props.session.status === 'authenticated' ? (
                push(props.target)
            ) : (
                <div>{props.children}</div>
            )}
        </>
    )
}
