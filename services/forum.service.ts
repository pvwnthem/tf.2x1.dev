'use server'
import { connect } from "@lib/mongodb"
import ForumPost from "@models/forum/ForumPost";

export async function getNumberOfPostsInCategory ( category : string ) {
    try {
        await connect();

        const count = await ForumPost.countDocuments( { category } )

        return count
    } catch (e : any) {
        throw new Error(e)
    }
}