/* eslint-disable @next/next/no-img-element */
'use client'
import { levels } from '@constants/levels'
import React from 'react'

export default function Badge(props: { user: any }) {
    const { level, xp, title } = props.user

    return (
        <>
            <img alt="badge" className="" src={levels[level].badge} />
            <div className="flex items-center justify-center w-full">
                <h1 className="mt-1  text-wave-300">
                    {title} lvl {level}
                </h1>
            </div>

            {levels[level + 1] ? (
                <h2 className="text-center mt-1 text-wave-200">
                    {xp} xp / {levels[level + 1].xpRequired} xp
                </h2>
            ) : (
                <h2 className="text-center mt-1 text-wave-200">
                    {xp} xp / {levels[level].xpRequired} xp
                </h2>
            )}
        </>
    )
}
