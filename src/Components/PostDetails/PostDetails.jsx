import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

function PostDetails() {
    const post = useLoaderData();

    const navigate = useNavigate();
  return (
    <div>
      <h4>{post.title}</h4>
      <h6>{post.body}</h6>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}

export default PostDetails;