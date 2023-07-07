/** @format */

'use server'
import { connect } from '@lib/mongodb'
import { IUser } from '@models/User'
import ForumPost from '@models/forum/ForumPost'
import Forum from '../app/forum/page'

export async function getNumberOfPostsInCategory(category: string) {
    try {
        await connect()

        const count = await ForumPost.countDocuments({ category })

        return count
    } catch (e: any) {
        throw new Error(e)
    }
}

export async function getAllPostsInCategory(category: string) {
    try {
        await connect()

        const posts = await ForumPost.find({ category })

        return JSON.parse(JSON.stringify(posts))
    } catch (e: any) {
        throw new Error(e)
    }
}

export async function getPost(id: string) {
    try {
        await connect()

        const post = await ForumPost.findOne({ postId: id })

        return JSON.parse(JSON.stringify(post))
    } catch (e: any) {
        throw new Error(e)
    }
}

export async function addReply(parentId: string, reply: any) {
    try {
        await connect()

        const post = await ForumPost.findOneAndUpdate(
            { postId: parentId },
            { $push: { replies: JSON.stringify(reply) } },
            { new: true }
        )

        return JSON.parse(JSON.stringify(post))
    } catch (e: any) {
        throw new Error(e)
    }
}

export async function removeReply(parentId: string, replyId: string) {
    try {
        await connect()

        const post = await ForumPost.findOne({ postId: parentId })

        if (!post) {
            throw new Error('Post not found')
        }

        const updatedReplies = post.replies.filter((reply: string) => {
            const replyObj = JSON.parse(reply)
            return replyObj.postId !== replyId
        })

        post.replies = updatedReplies
        await post.save()

        return JSON.parse(JSON.stringify(post))
    } catch (e: any) {
        throw new Error(e)
    }
}

export async function editReply(
    parentId: string,
    replyId: string,
    updatedContent: string
) {
    try {
        await connect()

        const post = await ForumPost.findOne({ postId: parentId })

        if (!post) {
            throw new Error('Post not found')
        }

        const updatedReplies = post.replies.map((reply: string) => {
            const replyObj = JSON.parse(reply)
            if (replyObj.postId === replyId) {
                replyObj.content = updatedContent // Update the content of the matching reply
            }
            return JSON.stringify(replyObj)
        })

        post.replies = updatedReplies
        post.updatedAt = Date.now()
        await post.save()

        return JSON.parse(JSON.stringify(post))
    } catch (e: any) {
        throw new Error(e)
    }
}

export async function isReplyUnique(parentId: string, user: IUser) {
    try {
        await connect()

        const post = await ForumPost.findOne({ postId: parentId })

        if (!post) {
            throw new Error('Post not found')
        }

        let count = 0
        for (const reply of post.replies) {
            if (JSON.parse(reply).author === user.id) {
                count++
                if (count > 1) {
                    return false
                }
            }
        }
        return true
    } catch (e: any) {
        throw new Error(e)
    }
}

export async function deletePost(id: string) {
    try {
        await connect()

        const doc = await ForumPost.findOneAndDelete({ postId: id })

        return JSON.parse(JSON.stringify(doc))
    } catch (e: any) {
        throw new Error(e)
    }
}
