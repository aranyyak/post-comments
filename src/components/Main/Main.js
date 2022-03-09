import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import './Main.css'

const Main = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setPosts(data))
    }, [])
    return (
        <div className="main">
            {
                posts.map(post => <Post post={post} key={post.id}></Post>)
            }
        </div>
        
    );
};

export default Main;