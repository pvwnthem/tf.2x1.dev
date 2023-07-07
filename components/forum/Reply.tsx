/** @format */

import Trash from '@components/svg/trash'
import { deletedUserPfp } from '@constants/images'
import { deletedUserBadge, levels } from '@constants/levels'
import { getUser } from '@services/users.service'
import React, { useState, useEffect } from 'react'

const Reply = ({
    reply,
    handleDelete,
    handleEdit,
    editable,
    deletable,
}: {
    reply: any
    handleDelete: any
    handleEdit: any
    editable: boolean
    deletable: boolean
}) => {
    const [user, setUser] = useState<any>(null)
    const [editing, setEditing] = useState(false)
    const [editedContent, setEditedContent] = useState(reply.content)

    useEffect(() => {
        async function getUserData() {
            const user = await getUser(reply.author)
            setUser(user)
        }

        getUserData()
    }, [reply.author])

    const handleEditClick = () => {
        setEditing(true)
    }

    const handleCancelEdit = () => {
        setEditing(false)
        setEditedContent(reply.content)
    }

    const handleSaveEdit = () => {
        handleEdit(editedContent)
        setEditing(false)
    }

    const handleContentChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setEditedContent(e.target.value)
    }

    return (
        <>
            <>
                <a className='w-full border flex flex-col md:flex-row md:items-center md:px-4 md:py-8 px-2 py-6'>
                    <a
                        href={user ? `/users/${user.username}` : undefined}
                        className='flex items-center md:w-1/5 mb-4 md:mb-0'
                    >
                        <img
                            src={user ? user.profilePicture : deletedUserPfp}
                            className='w-12 h-12 mr-4'
                            alt='Profile'
                        />
                        <div className='flex flex-col'>
                            <h1 className='text-wave-300 text-sm md:text-base'>
                                {user ? user.username : 'deleted user'}
                            </h1>
                            <h2 className='text-wave-500 text-xs md:text-sm'>
                                level {user ? user.level : '0'}{' '}
                                {user ? user.title : 'deleted'}
                            </h2>
                        </div>
                    </a>

                    <div className='flex flex-col md:flex-grow'>
                        <div className=''>
                            <h1 className='text-wave-100 text-sm md:text-md font-semibold mb-2'>
                                posted on{' '}
                                {new Date(reply.createdAt).toLocaleDateString()}{' '}
                                {reply.updatedAt
                                    ? `updated on ${new Date(
                                          reply.updatedAt
                                      ).toLocaleDateString()} at ${new Date(
                                          reply.updatedAt
                                      ).toLocaleTimeString()}`
                                    : null}
                            </h1>
                            {editing ? (
                                <textarea
                                    value={editedContent}
                                    onChange={handleContentChange}
                                    className='bg-background text-wave-300'
                                />
                            ) : (
                                <h2 className='text-wave-300'>
                                    {reply.content}
                                </h2>
                            )}
                        </div>
                    </div>

                    <div className='ml-auto'>
                        <img
                            src={
                                user
                                    ? levels[user.level].badge
                                    : deletedUserBadge
                            }
                            className='h-12 md:h-16'
                            alt='Level Badge'
                        />
                    </div>
                    {deletable && (
                        <button
                            className='text-wave-400 w-8 md:mx-4'
                            onClick={handleDelete}
                        >
                            <Trash />
                        </button>
                    )}
                    {editable && !editing && (
                        <button
                            className='text-wave-400 w-8 md:mx-4'
                            onClick={handleEditClick}
                        >
                            Edit
                        </button>
                    )}
                    {editing && (
                        <>
                            <button
                                className='text-wave-400 w-8 md:mx-4'
                                onClick={handleSaveEdit}
                            >
                                Save
                            </button>
                            <button
                                className='text-wave-400 w-8 md:mx-4'
                                onClick={handleCancelEdit}
                            >
                                Cancel
                            </button>
                        </>
                    )}
                </a>
            </>
        </>
    )
}

export default Reply
