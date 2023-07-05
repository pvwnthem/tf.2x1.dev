/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

'use client'
import { deletedUserBadge, levels } from '@constants/levels'
import React from 'react'

export default function DeletedBadge() {
    return (
        <>
            <img alt='badge' className='' src={deletedUserBadge} />
            <div className='flex items-center justify-center w-full'>
                <h1 className='mt-1  text-wave-300'>deleted lvl 0</h1>
            </div>

            <h2 className='text-center mt-1 text-wave-200'>0 xp / 0 xp</h2>
        </>
    )
}
