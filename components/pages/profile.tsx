/** @format */
'use client'
import React, { useState, useEffect } from 'react'
import LevelBar from '@components/levels/LevelBar'
import { getUser, updateUser } from '@services/users.service'
import Description from '@components/profile/Description'
import EditingButton from '@components/profile/editing/EditingButton'
import EditDescription from '@components/profile/editing/EditDescription'
import Username from '@components/profile/Username'
import EditUsername from '@components/profile/editing/EditUsername'
import ProfilePicture from '@components/profile/ProfilePicture'
import EditProfilePicture from '@components/profile/editing/EditProfilePicture'
import { encrypt } from '@services/encryption.service'

const validateData = (
    data: {
        username: string
        description: string
    },
    lastChangedName: number | Date,
    lastUsername: string
) => {
    const errors = []

    lastChangedName = new Date(lastChangedName)

    if (
        lastChangedName.getDate() + 30 < Date.now() &&
        data.username !== lastUsername
    ) {
        lastChangedName.setDate(lastChangedName.getDate() + 30)
        errors.push({
            error: `you can change your name on ${lastChangedName.toLocaleDateString()}`,
        })
    }

    if (data.username !== lastUsername && data.username.length < 4) {
        errors.push({
            error: 'username must be at least 4 characters long',
        })
    } else if (data.username !== lastUsername && data.username.length > 16) {
        errors.push({
            error: 'username should be less than 16 characters long',
        })
    }

    if (data.description.length === 0) {
        errors.push({
            error: 'Description must be at least 1 character long',
        })
    }
    if (data.description.length > 128) {
        errors.push({
            error: "Description can't be longer than 128 characters",
        })
    }

    return errors
}

const Profile: React.FC<any> = (props) => {
    const {
        profilePicture,
        username,
        description,
        id,
        role,
        lastChangedName,
        xp,
        level,
    } = props.session.data.user
    const { update } = props.session

    const [editing, setEditing] = useState<boolean>(false)
    const [updatedUsername, setUpdatedUsername] = useState<string>(username)
    const [updatedProfilePicture, setUpdatedProfilePicture] =
        useState<string>(profilePicture)
    const [updatedDescription, setUpdatedDescription] =
        useState<string>(description)
    const [updatedXP, setUpdatedXP] = useState<number>(xp)
    const [updatedLevel, setUpdatedLevel] = useState<number>(level)
    const [validationErrors, setValidationErrors] = useState<any>([])

    useEffect(() => {
        async function getUserData() {
            try {
                const response = await getUser(id)
                const { profilePicture, username, description, xp, level } =
                    response

                setUpdatedUsername(username.toLowerCase())
                setUpdatedDescription(description)
                setUpdatedProfilePicture(profilePicture)
                setUpdatedXP(xp)
                setUpdatedLevel(level)
            } catch (error) {
                console.log('Error fetching user data:', error)
            }
        }

        getUserData()
    }, [id])

    const handleUsernameChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setUpdatedUsername(event.target.value.toLowerCase())
    }

    const handleDescriptionChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setUpdatedDescription(event.target.value)
    }

    const handleProfilePictureChange = (event: React.ChangeEvent<any>) => {
        setUpdatedProfilePicture(event.target.value)
    }

    const handleEdit = () => {
        setEditing(true)
    }

    const handleSave = async () => {
        const updatedUser = {
            username: updatedUsername,
            description: updatedDescription,
            profilePicture: updatedProfilePicture,
            xp: updatedXP,
            level: updatedLevel,
        }

        const validationErrors = validateData(
            updatedUser,
            lastChangedName,
            username
        )

        if (validationErrors.length > 0) {
            setValidationErrors(validationErrors)
            return
        }

        try {
            const response = await updateUser(id, updatedUser)

            await updateUser(id, { lastChangedName: Date.now() })

            const data = {
                profilePicture: response.profilePicture,
                description: response.description,
                username: response.username,
                xp: response.xp,
                level: response.level,
            }

            const encryptedData = await encrypt(JSON.stringify(data))

            localStorage.setItem('user', encryptedData)

            update({
                ...props.session,
                data: {
                    ...props.session.data,
                    user: response,
                },
            })

            setEditing(false)
        } catch (error: any) {
            setValidationErrors([...validationErrors, error])
        }
    }

    return (
        <div className='bg-background h-screen flex items-center justify-center py-8'>
            <div className='w-full md:w-1/2 h-full flex flex-col items-center justify-start'>
                <div className='md:mt-16 mt-12 w-full flex flex-col items-center justify-center'>
                    {editing ? (
                        <EditProfilePicture
                            src={profilePicture}
                            handleProfilePictureChange={
                                handleProfilePictureChange
                            }
                        />
                    ) : (
                        <ProfilePicture src={updatedProfilePicture} />
                    )}

                    {editing ? (
                        <EditUsername
                            username={updatedUsername}
                            handleUsernameChange={handleUsernameChange}
                        />
                    ) : (
                        <Username username={updatedUsername} />
                    )}

                    <h1 className='text-wave-200 text-lg'>{role}</h1>

                    <LevelBar
                        user={{
                            ...props.session.data.user,
                            xp: updatedXP,
                            level: updatedLevel,
                        }}
                    />
                </div>

                <div className='mt-4 md:w-3/4 flex items-start justify-center py-2 break-words'>
                    {editing ? (
                        <EditDescription
                            description={updatedDescription}
                            handleDescriptionChange={handleDescriptionChange}
                        />
                    ) : (
                        <Description description={updatedDescription} />
                    )}
                </div>

                {validationErrors.length > 0 && (
                    <div className='text-red-500'>
                        {validationErrors.map((error: any, index: number) => (
                            <p key={index}>{error.error}</p>
                        ))}
                    </div>
                )}

                <EditingButton
                    isEditing={editing}
                    handleSave={handleSave}
                    handleEdit={handleEdit}
                />
            </div>
        </div>
    )
}

export default Profile
