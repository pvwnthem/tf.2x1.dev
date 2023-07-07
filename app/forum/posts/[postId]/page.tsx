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
import {
    addReply,
    editReply,
    getPost,
    isReplyUnique,
    removeReply,
} from '@services/forum.service'
import { getUser } from '@services/users.service'
import { uuid } from 'uuidv4'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { RoleManager } from '@services/roles.service'
import { IUser } from '@models/User'
import { addXP } from '@services/levels.service'

export default function PostPage({ params }: { params: { postId: string } }) {
    const [post, setPost] = useState<any>(null)
    const [user, setUser] = useState<any>(null)
    const [notFound, setNotFound] = useState<boolean>(false)
    const [postLoading, setPostLoading] = useState<boolean>(true)
    const [userLoading, setUserLoading] = useState<boolean>(true)
    const [replyContent, setReplyContent] = useState<any>(null)
    const [replies, setReplies] = useState<IForumPost[]>([])
    const [replyLoading, setReplyLoading] = useState<boolean>(true)
    const session = useSession()
    const { update } = session

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
    }, [params.postId])

    const handleReply = async () => {
        const reply = {
            postId: uuid(), // Generate a unique string value for postId
            title: '', // Provide a title for the reply
            content: replyContent,
            author: (session.data?.user as IUser).id,
            category: '',
            createdAt: Date.now(),
        }

        try {
            const response = await addReply(params.postId, reply)

            if (
                post.author != (session.data?.user as IUser).id &&
                (await isReplyUnique(
                    post.postId,
                    reply.postId,
                    session.data?.user as IUser
                ))
            ) {
                addXP(post.author, 25).then((user) => {
                    update({
                        ...session,
                        data: {
                            ...session.data,
                            user,
                        },
                    })
                })

                // add notification to post author once xp is added
            }

            if (replies) {
                setReplies((prevReplies: IForumPost[]) => [
                    ...prevReplies,
                    JSON.stringify(reply) as unknown as IForumPost,
                ]) // Add the new reply to the list
            } else {
                setReplies([JSON.stringify(reply) as unknown as IForumPost])
            }
            setReplyContent('') // Clear the reply content
        } catch (error: any) {
            throw new Error(error)
        }
    }

    const handleLike = () => {}

    if (notFound) {
        return <UserNotFound />
    }

    if (postLoading || userLoading) {
        return <Loading />
    }

    function scroll(to: string) {
        var element = document.getElementById(to)
        element?.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest',
        })
    }

    return (
        <>
            <Navbar overlapsNot={true} />
            <div className='w-full min-h-screen md:px-16 bg-background flex flex-col items-center'>
                <div className='w-full border p-8'>
                    <div className='flex flex-col md:flex-row'>
                        <div className='w-full md:w-1/5 flex flex-col border rounded p-8 items-center justify-center'>
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
                            <h2 className='text-wave-500'>
                                {user ? user.role : 'deleted'}
                            </h2>
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

                        <div className='px-4 md:px-12'>
                            <div className='post-content md:mt-0 mt-8'>
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

                <div className='w-full flex flex-col md:flex-row justify-end px-8 mt-4 space-y-4 md:space-y-0 md:space-x-4'>
                    <button
                        onClick={() => scroll('reply')}
                        className='bg-wave-500 hover:bg-wave-400 px-8 py-4 rounded text-white flex whitespace-nowrap text-xl w-full md:w-auto'
                    >
                        Reply
                    </button>
                    <button
                        onClick={handleLike}
                        className='bg-wave-300 hover:bg-wave-400 px-8 py-4 rounded text-white flex whitespace-nowrap text-xl w-full md:w-auto'
                    >
                        Like
                    </button>
                </div>

                <div className='w-full mt-8 md:px-0 px-8'>
                    <h1 className='text-left text-wave-300 text-4xl'>
                        Replies
                    </h1>
                    {!replyLoading && replies && replies.length > 0 ? (
                        replies.map((reply: IForumPost, index: number) => {
                            const handleDelete = async () => {
                                await removeReply(
                                    post.postId,
                                    JSON.parse(reply as any).postId
                                )
                                // Remove the reply from the screen
                                setReplies((prevReplies) =>
                                    prevReplies.filter(
                                        (r: any) =>
                                            JSON.parse(r).postId !==
                                            JSON.parse(reply as any).postId
                                    )
                                )
                            }

                            const handleEdit = async (content: string) => {
                                await editReply(
                                    post.postId,
                                    JSON.parse(reply as any).postId,
                                    content
                                )
                                setReplies((prevReplies: any) =>
                                    prevReplies.map((r: any) => {
                                        const parsedReply = JSON.parse(r)
                                        if (
                                            parsedReply.postId ===
                                            JSON.parse(reply as any).postId
                                        ) {
                                            parsedReply.content = content
                                        }
                                        return JSON.stringify(parsedReply)
                                    })
                                )
                            }
                            return (
                                <Reply
                                    reply={JSON.parse(
                                        reply as unknown as string
                                    )}
                                    parentId={post.postId}
                                    key={index}
                                    editable={
                                        JSON.parse(reply as any).author ===
                                            (session.data?.user as IUser).id ||
                                        new RoleManager(
                                            (session.data?.user as IUser).role
                                        ).hasPerm('edit')
                                    }
                                    deletable={
                                        JSON.parse(reply as any).author ===
                                            (session.data?.user as IUser).id ||
                                        new RoleManager(
                                            (session.data?.user as IUser).role
                                        ).hasPerm('delete')
                                    }
                                    handleDelete={handleDelete}
                                    handleEdit={handleEdit}
                                />
                            )
                        })
                    ) : (
                        <h1 className='text-wave-200'>No replies yet!</h1>
                    )}
                </div>

                <div className='w-full mt-8  md:px-0 px-8'>
                    <h1 className='text-left text-wave-300 text-4xl'>Reply</h1>
                    <textarea
                        value={replyContent}
                        onChange={(e) => setReplyContent(e.target.value)}
                        className='w-full h-40 bg-background text-wave-300 p-4'
                        placeholder='Write your reply...'
                    ></textarea>
                    <button
                        id='reply'
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
