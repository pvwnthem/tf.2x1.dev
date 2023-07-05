/** @format */

'use client'
import Loading from '@components/pages/loading'
import React from 'react'

export interface props {
    children: any
    session: any
    target: any
}

export default function RedirectIfAuth(props: props) {
    function redirect() {
        window.location.replace(props.target)
    }

    return (
        <>
            {props.session.status === 'authenticated' ? (
                redirect()
            ) : (
                <div>{props.children}</div>
            )}
        </>
    )
}
