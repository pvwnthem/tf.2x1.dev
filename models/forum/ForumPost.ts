import mongoose, { Document, Schema } from 'mongoose';

interface IForumPost extends Document {
  postId: string;
  title: string;
  content: string;
  author: string;
  parent: string | null;
  replies: string[];
  createdAt: Date;
  updatedAt: Date;
}

const ForumPostSchema: Schema = new Schema({
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
  parent: {
    type: String,
    ref: 'ForumPost',
    default: null,
  },
  replies: [{
    type: String,
    ref: 'ForumPost',
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

ForumPostSchema.set('toJSON', {
  virtuals: true,
});

const ForumPost = mongoose.models.ForumPost || mongoose.model<IForumPost>('ForumPost', ForumPostSchema);

export default ForumPost;
