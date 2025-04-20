import React from 'react';
import { useLoaderData } from 'react-router';

function PostDetails() {
    const post = useLoaderData();
  return (
    <div>
      <h4>{post.title}</h4>
      <h6>{post.body}</h6>
    </div>
  );
}

export default PostDetails;