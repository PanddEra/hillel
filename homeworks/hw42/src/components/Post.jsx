import React from 'react';
const Post = ({data}) => {
    return (
        <li className="posts_single-post" data-post-id={data.id}>
            <h3 className="posts__post-title">{data.title}</h3>
            <p className="posts__post-description">{data.body}</p>
        </li>
    );
}
export default Post;
