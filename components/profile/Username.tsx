'use client'
import React from 'react'

const Username = ({ username }: { username: string }) => {
    return (
        <div className="flex items-center justify-center">
            <h1 className="text-4xl py-4 md:text-5xl text-wave-300">
                {username}
            </h1>
        </div>
    )
}

export default Username
