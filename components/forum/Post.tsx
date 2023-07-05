/** @format */

import Badge from '@components/levels/Badge'
import Loading from '@components/pages/loading'
import Trading from '@components/svg/trading'
import { deletedUserPfp } from '@constants/images'
import { deletedUserBadge, levels } from '@constants/levels'
import { getNumberOfPostsInCategory } from '@services/forum.service'
import { getUser } from '@services/users.service'
import React, { useState, useEffect } from 'react'

const Post = ({ post }: { post: any }) => {
    const [user, setUser] = useState<any>(null)

    useEffect(() => {
        async function getUserData() {
            const user = await getUser(post.author)
            setUser(user)
        }

        getUserData()
    }, [post.author])

    return (
        <>
            <>
                <a
                    href={`/forum/posts/${post.postId}`}
                    className="w-full border flex flex-col md:flex-row md:items-center md:px-4 md:py-8 px-2 py-6"
                >
                    <div className="flex items-center md:w-1/5 mb-4 md:mb-0">
                        <img
                            src={user ? user.profilePicture : deletedUserPfp}
                            className="w-12 h-12 mr-4"
                            alt="Profile"
                        />
                        <div className="flex flex-col">
                            <h1 className="text-wave-300 text-sm md:text-base">
                                {user ? user.username : 'deleted user'}
                            </h1>
                            <h2 className="text-wave-500 text-xs md:text-sm">
                                level {user ? user.level : '0'}{' '}
                                {user ? user.title : 'deleted'}
                            </h2>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-grow">
                        <div className="">
                            <h1 className="text-wave-300 text-base md:text-xl font-semibold mb-2">
                                {post.title}
                            </h1>
                        </div>

                        <h2 className="text-wave-100 text-xs md:text-sm font-light">
                            by {user ? user.username : 'deleted user'} on{' '}
                            {new Date(post.createdAt).toLocaleDateString(
                                'en-US',
                                {
                                    month: '2-digit',
                                    day: '2-digit',
                                    year: 'numeric',
                                }
                            )}{' '}
                            at{' '}
                            {new Date(post.createdAt).toLocaleTimeString(
                                'en-US'
                            )}
                        </h2>
                    </div>

                    <div className="ml-auto">
                        <img
                            src={
                                user
                                    ? levels[user.level].badge
                                    : deletedUserBadge
                            }
                            className="h-12 md:h-16"
                            alt="Level Badge"
                        />
                    </div>
                </a>
            </>
        </>
    )
}

export default Post
