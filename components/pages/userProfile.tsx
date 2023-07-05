/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'
import Image from 'next/image'
import LevelBar from '@components/levels/LevelBar'
import { levels } from '@constants/levels'
import Description from '@components/profile/Description'
import Username from '@components/profile/Username'
import ProfilePicture from '@components/profile/ProfilePicture'

export default function UserProfile(props: { user: any }) {
    const { profilePicture, username, description, level } = props.user

    return (
        <div className="bg-background h-screen flex items-center justify-center py-8">
            <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-start">
                <div className="md:mt-16 mt-12 w-full flex flex-col items-center justify-center">
                    <ProfilePicture src={profilePicture} />

                    <div className="flex items-center justify-center">
                        <Username username={username} />
                    </div>

                    <LevelBar user={props.user} />
                </div>

                <Description description={description} />
            </div>
        </div>
    )
}
