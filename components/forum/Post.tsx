import Trading from '@components/svg/trading';
import { getNumberOfPostsInCategory } from '@services/forum.service';
import React, { useState, useEffect } from 'react';

const Post = ({ post }: { post : any }) => {


  return (
    <a href={`/forum/topic/${post.postId}`} className=" ">
      
      
    </a>
  );
};

export default Post;
