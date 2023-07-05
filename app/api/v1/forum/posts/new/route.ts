"use server";
import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { NextResponse } from "next/server";
import { uuid } from "uuidv4";
import { connect } from "@lib/mongodb";
import ForumPost, { IForumPost } from "@models/forum/ForumPost";

export const POST = async (req: Request, res: NextApiResponse) => {
    try {
        await connect();

        const data = (await req.json()) as unknown as IForumPost;

        const { category, author, title, content } = data;

        if (!category || !author || !title || !content) {
            return new NextResponse("One or more fields are missing", {
                status: 400,
            });
        }

        if (title.length > 56) {
            return new NextResponse(
                "Title must be 56 or less characters long",
                {
                    status: 409,
                }
            );
        }

        if (content.length > 2048) {
            return new NextResponse(
                "Content must be 2048 or less characters long",
                {
                    status: 409,
                }
            );
        }
        const postData = {
            category,
            author,
            title,
            content,
            postId: uuid(),
        };

        const newPost = new ForumPost(postData);

        await newPost.save();

        return NextResponse.json({
            success: true,
            post: JSON.parse(JSON.stringify(newPost)),
        });
    } catch (error: any) {
        if (error.response) {
            // Request was made and server responded with an error status.
            return new NextResponse(error.response.data.message, {
                status: 500,
            });
        } else if (error.request) {
            // The request was made but no response was received.
            return new NextResponse("No response received from the server.", {
                status: 500,
            });
        } else {
            // Something else happened while setting up the request.
            return new NextResponse(
                "An error occurred while creating the forum post.",
                {
                    status: 500,
                }
            );
        }
    }
};
