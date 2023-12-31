/** @format */

'use client'
import Loading from '@components/pages/loading'

export interface props {
    children: any
    session: any
}

export default function Wrapper(props: props) {
    return (
        <>
            {props.session.status === 'loading' ? (
                <Loading />
            ) : (
                <div>{props.children}</div>
            )}
        </>
    )
}
