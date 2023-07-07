/** @format */

'use client'
import AuthError from './errors/AuthError'

export interface props {
    children: any
    session: any
}

export default function Protected(props: props) {
    return (
        <>
            {props.session.status === 'authenticated' && (
                <div>{props.children}</div>
            )}
            {props.session.status != 'loading' &&
                props.session.status != 'authenticated' && <AuthError />}
        </>
    )
}
