/** @format */

'use client'
import React from 'react'

const ProfilePicture = ({ src, onClick }: { src: string; onClick?: any }) => {
    return (
        <div className='rounded-full w-1/4 flex items-center justify-center p-2'>
            <img alt='Profile Picture' src={src} className='w-full' />
        </div>
    )
}

export default ProfilePicture
