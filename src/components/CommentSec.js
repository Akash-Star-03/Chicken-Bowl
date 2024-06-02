import React, { useEffect, useState } from 'react';

const CommentSec = ({comments}) => {
    const [index,setIndex]=useState(0)

    //Using useState  and Interval to create the comment auto slide
    useEffect(()=>{
        const interval =setInterval(()=>{
            setIndex((prevIndex)=>(prevIndex+1) % comments.length);
        },5000);
        return ()=> clearInterval(interval);
    },[comments.length])
  return (
    <div >
        {comments.length > 0 && (
            <h3 className='  text-white news-cycle-regular '> {comments[index]} </h3> 
        )
        }
    </div>
  );
};

export default CommentSec;