import mongoose, { Document, Schema } from "mongoose";

export interface IReply {
    postId: string;
    title: string | null;
    content: string;
    author: string;
    category: string | null;
}

export interface IForumPost extends Document {
    category: string;
    postId: string;
    title: string;
    content: string;
    author: string;
    replies: IReply[];
    createdAt: Date;
    updatedAt: Date;
}

const ForumPostSchema: Schema = new Schema({
    category: {
        type: String,
        required: true,
    },
    postId: {
        type: String,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    replies: [
        {
            type: {
                type: String,
            },
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

ForumPostSchema.set("toJSON", {
    virtuals: true,
});

const ForumPost =
    mongoose.models.ForumPost ||
    mongoose.model<IForumPost>("ForumPost", ForumPostSchema);

export default ForumPost;
