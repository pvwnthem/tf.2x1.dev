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

export async function getAllPostsInCategory(category: string) {
    try {
      await connect();
  
      const posts = await ForumPost.find({ category });
  
      return JSON.parse(JSON.stringify(posts));
    } catch (e: any) {
      throw new Error(e);
    }
}

export async function getPost(id : string) {
  try {
    await connect();

    const post = await ForumPost.findOne({ postId: id });

    return JSON.parse(JSON.stringify(post));
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function addReply ( parentId: string, reply: any ) {
  try {
    await connect();

    const post = await ForumPost.findOneAndUpdate({ postId: parentId } , { "$push": { replies: JSON.stringify(reply)  } }, { new: true });

    return JSON.parse(JSON.stringify(post));
  } catch (e: any) {
    throw new Error(e);
  }
}