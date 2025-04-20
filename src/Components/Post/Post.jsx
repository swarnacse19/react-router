import React from 'react';
import { Link, useNavigate } from 'react-router';

function Post({post}) {
    const {title, id} = post;

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/posts/${id}`)
    }
  return (
    <div style={{border: '1px solid white'}}>
      <h3>{title}</h3>
      <Link to={`/posts/${id}`}>
        <button>Show details</button>
      </Link>
      <button onClick={handleNavigate}>Details of : {id}</button>
    </div>
  );
}

export default Post;