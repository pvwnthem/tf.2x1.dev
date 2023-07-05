/** @format */

'use client'
import UserNotFound from '@components/auth/errors/UserNotFound'
import Reply from '@components/forum/Reply'
import Badge from '@components/levels/Badge'
import DeletedBadge from '@components/levels/DeletedBadge'
import { Navbar } from '@components/navigation/navbar'
import Loading from '@components/pages/loading'
import { deletedUserPfp } from '@constants/images'
import ForumPost, { IForumPost } from '@models/forum/ForumPost'
import { addReply, getPost } from '@services/forum.service'
import { getUser } from '@services/users.service'
import { uuid } from 'uuidv4'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

function Replies({ replies }: { replies: IForumPost[] }) {
    console.log(replies, 'rep')
    if (replies.length > 0) {
        return replies.map((reply: IForumPost, index: number) => {
            return (
                <Reply
                    reply={JSON.parse(reply as unknown as string)}
                    key={index}
                />
            )
        })
    } else {
        return <h1 className='text-wave-200'>No replies yet!</h1>
    }
}

export default function PostPage({ params }: any) {
    const [post, setPost] = useState<any>(null)
    const [user, setUser] = useState<any>(null)
    const [notFound, setNotFound] = useState<boolean>(false)
    const [postLoading, setPostLoading] = useState<boolean>(true)
    const [userLoading, setUserLoading] = useState<boolean>(true)
    const [replyContent, setReplyContent] = useState<any>(null)
    const [replies, setReplies] = useState<IForumPost[]>([])
    const [replyLoading, setReplyLoading] = useState<boolean>(true)
    const session = useSession()

    useEffect(() => {
        async function getData() {
            if (params.postId) {
                setPostLoading(true)
                setUserLoading(true)

                const post = await getPost(params.postId)

                if (post) {
                    setPost(post)
                    const user = await getUser(post.author)
                    setUser(user)
                    setUserLoading(false)

                    // Fetch replies
                    setReplies(post.replies)
                    setReplyLoading(false)
                } else {
                    setNotFound(true)
                }

                setPostLoading(false)
            }
        }

        getData()
    }, [params.postId, params.category])

    const handleReply = async () => {
        const reply = {
            postId: uuid(), // Generate a unique string value for postId
            title: '', // Provide a title for the reply
            content: replyContent,
            author: (session.data?.user as any).id,
            category: '',
            createdAt: Date.now(),
        }

        try {
            const response = await addReply(params.postId, reply)
            setReplies((prevReplies: any) => [
                ...prevReplies,
                JSON.stringify(reply),
            ]) // Add the new reply to the list
            setReplyContent('') // Clear the reply content
        } catch (error) {
            console.error(error)
        }
    }

    const handleLike = () => {}

    if (notFound) {
        return <UserNotFound />
    }

    if (postLoading || userLoading) {
        return <Loading />
    }

    return (
        <>
            <Navbar overlapsNot={true} />
            <div className='w-full min-h-screen md:px-16 bg-background flex flex-col items-center'>
                <div className='w-full border flex-col p-8'>
                    <div className='flex w-full'>
                        <div className='w-1/5 flex flex-col border rounded p-8 items-center justify-center'>
                            <img
                                src={
                                    user ? user.profilePicture : deletedUserPfp
                                }
                                alt='Profile Picture'
                                className='w-1/2 px-2 mt-4'
                            />
                            <h1 className='text-wave-400 text-3xl mt-4'>
                                {user ? user.username : 'Deleted User'}
                            </h1>
                            <h2 className='text-wave-500'>{user.role}</h2>
                            <h1 className='mt-1 text-sm text-wave-200'>
                                Created{' '}
                                {user
                                    ? new Date(
                                          user.createdAt
                                      ).toLocaleDateString('en-US', {
                                          month: '2-digit',
                                          day: '2-digit',
                                          year: 'numeric',
                                      })
                                    : '00/00/0000'}{' '}
                                at{' '}
                                {user
                                    ? new Date(
                                          user.createdAt
                                      ).toLocaleTimeString('en-US')
                                    : '00:00:00'}
                            </h1>
                            <div className='mt-2 flex flex-col items-center justify-center'>
                                {user ? (
                                    <Badge user={user} />
                                ) : (
                                    <DeletedBadge />
                                )}
                            </div>
                        </div>

                        <div className='px-12'>
                            <div className='post-content'>
                                <h1 className='text-wave-300 text-3xl'>
                                    {post.title}
                                </h1>
                                <p className='text-wave-400 mt-8'>
                                    {post.content}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full flex justify-end px-8 mt-4 space-x-4'>
                    <button
                        onClick={handleReply}
                        className='bg-wave-500 hover:bg-wave-400 px-8 py-4 rounded text-white flex whitespace-nowrap text-xl'
                    >
                        Reply
                    </button>
                    <button
                        onClick={handleLike}
                        className='bg-wave-300 hover:bg-wave-400 px-8 py-4 rounded text-white flex whitespace-nowrap text-xl'
                    >
                        Like
                    </button>
                </div>

                <div className='w-full mt-8'>
                    <h1 className='text-left text-wave-300 text-4xl'>
                        Replies
                    </h1>
                    {!replyLoading && <Replies replies={replies} />}
                </div>

                <div className='w-full mt-8'>
                    <h1 className='text-left text-wave-300 text-4xl'>Reply</h1>
                    <textarea
                        value={replyContent}
                        onChange={(e) => setReplyContent(e.target.value)}
                        className='w-full h-40 bg-background text-wave-300 p-4'
                        placeholder='Write your reply...'
                    ></textarea>
                    <button
                        onClick={handleReply}
                        className='bg-wave-500 hover:bg-wave-400 px-8 py-4 rounded text-white flex whitespace-nowrap text-xl mt-4'
                    >
                        Submit Reply
                    </button>
                </div>
            </div>
        </>
    )
}
