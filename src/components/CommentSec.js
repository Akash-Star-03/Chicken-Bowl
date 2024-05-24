import React, { useEffect, useState } from 'react'
import { Textarea } from 'react-bootstrap-icons';



const CommentSec = ({comments}) => {
    const [index,setIndex]=useState(0)

    useEffect(()=>{
        const interval =setInterval(()=>{
            setIndex((prevIndex)=>(prevIndex+1) % comments.length);
        },4000);
        return ()=> clearInterval(interval);
    },[comments.length])
  return (
    <div >
        {comments.length > 0 && (
            <textarea className='comment-textarea' readOnly value={comments[index]}/>
        )
        }
    </div>
  );
};

export default CommentSec;