import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";


const Comments = () => {
    const {id} = useParams();
    const [comment, setComment] = useState({});
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/comments/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setComment(data))
    },[])
    
    return (
        <div>
            <div style={{margin:'20px 200px', color:'blue'}}>
                <div style={{display:'flex', alignItems:'flex-start', border: '1px solid gray', marginBottom:'20px', padding: '10px'}}>
                    <img style={{width:'50px', borderRadius:'50%', marginRight:'20px'}} src={`https://randomuser.me/api/portraits/thumb/men/${id}.jpg`} alt="" />
                    <p>{comment.name}</p>
                </div>
                
                <div style={{display:'flex', alignItems:'flex-start', border: '1px solid gray', marginBottom:'20px', padding: '10px'}}>
                    <img style={{width:'50px', borderRadius:'50%', marginRight:'20px', border:'1000px'}} src={`https://randomuser.me/api/portraits/thumb/men/${id-1}.jpg`} alt="" />
                    <p>{comment.body}</p>
                </div>
            </div>

        </div>
    );
};

export default Comments;