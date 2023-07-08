/** @format */

'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { IUser } from '@models/User'
import { addXP } from '@services/levels.service'
import { addNotification } from '@services/notifications.service'

interface NewPostFormProps {
    category: string
    session: any
}

const NewPostForm: React.FC<NewPostFormProps> = ({ category, session }) => {
    const { id } = session.data.user
    const { update } = session

    const [postData, setPostData] = useState({
        category,
        author: id,
        title: '',
        content: '',
    })

    const [submitError, setSubmitError] = useState('')
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target

        setPostData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        try {
            setLoading(true)

            const response = await axios.post(
                '/api/v1/forum/posts/new',
                postData
            )

            addXP(response.data.post.author, 25).then((user: IUser) => {
                update({
                    ...session,
                    data: {
                        ...session.data,
                        user,
                    },
                })

                // add notification to post author once xp is added
                addNotification(user.id, {
                    type: 'xp',
                    message: 'You recieved xp for making a post!',
                    amount: 25,
                })
            })

            // Handle the successful creation of the forum post.
            router.push(`/forum/posts/${response.data.post.postId}`)
        } catch (error: any) {
            if (error.response) {
                // Request was made and server responded with an error status.
                setSubmitError(error.response.data.message)
            } else if (error.request) {
                // The request was made but no response was received.
                setSubmitError('No response received from the server.')
            } else {
                // Something else happened while setting up the request.
                setSubmitError(
                    'An error occurred while creating the forum post.'
                )
            }
        }

        setLoading(false)
    }

    return (
        <div className='w-full h-screen bg-background flex items-center justify-center'>
            <div className='md:w-2/3 w-full rounded-lg py-8 md:px-2 px-2 flex items-center justify-center'>
                <form onSubmit={handleSubmit}>
                    <h1 className='text-3xl font-semibold text-center text-wave-300'>
                        Create a New Forum Post
                    </h1>

                    <div className='mt-4'>
                        <label
                            htmlFor='title'
                            className='text-wave-300 block font-semibold mb-2'
                        >
                            Title:
                        </label>
                        <input
                            type='text'
                            id='title'
                            name='title'
                            maxLength={56}
                            value={postData.title}
                            onChange={handleInputChange}
                            className='p-2 w-full rounded'
                            required
                        />
                    </div>

                    <div className='mt-4'>
                        <label
                            htmlFor='content'
                            className='text-wave-300 block font-semibold mb-2'
                        >
                            Content:
                        </label>
                        <textarea
                            id='content'
                            name='content'
                            maxLength={2048}
                            value={postData.content}
                            onChange={handleInputChange}
                            className='p-2 w-full rounded'
                            required
                        />
                    </div>

                    <button
                        type='submit'
                        className='mx-auto text-white mt-4 p-2 bg-wave-300 rounded-md w-full'
                        disabled={loading}
                    >
                        {loading ? 'Creating...' : 'Create Post'}
                    </button>

                    {submitError && (
                        <p className='text-center mt-4 text-wave-500'>
                            Error: {submitError}
                        </p>
                    )}
                </form>
            </div>
        </div>
    )
}

export default NewPostForm
