import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';

function Posts() {
    const posts = useLoaderData();
  return (
    <div>
      <h1>These are my posts {posts.length}</h1>
      <div>
        {
            posts.map(post => <Post key={post.id} post={post}></Post>)
        }
      </div>
    </div>
  );
}

export default Posts;