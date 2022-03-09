import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Comments from './Comments/Comments';

const PostDetails = () => {
    const [details, setDetails] = useState({})
    const {id} = useParams();
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[]);
    return (
        <div>
            <p style={{color: 'green', fontSize:'20px', margin: '50px 100px'}}>{details.body}</p>
            <Comments></Comments>
        </div>
    );
};

export default PostDetails;