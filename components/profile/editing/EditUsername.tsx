'use client'
import React from 'react'

const EditUsername = ({
    username,
    handleUsernameChange,
}: {
    username: string
    handleUsernameChange: any
}) => {
    return (
        <div className="w-full flex ">
            <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                className="text-4xl py-4 md:text-5xl mx-auto text-center text-wave-300 bg-background"
            />
        </div>
    )
}

export default EditUsername
