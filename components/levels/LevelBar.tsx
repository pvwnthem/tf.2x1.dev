/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

'use client'
import React from 'react'
import Badge from './Badge'

export default function LevelBar(props: { user: any }) {
    return (
        <>
            <div className="flex flex-col items-center justify-center w-1/2">
                <Badge user={props.user} />
            </div>
        </>
    )
}
