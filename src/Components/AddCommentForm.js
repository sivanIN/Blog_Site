import React, {useState} from "react";

const AddCommentForm=({articleName,setArticleInfo})=>{

const [username,setUsername]=useState('');
const [commentText,SetCommentText]=useState('');

const addcomment=async()=>{

    const result =await fetch(`/api/articles/${articleName}/comments`,{
        method:"post",
        body:JSON.stringify({username,text:commentText}),
        headers:{
            'content-type':'application/json'
        }
    });
    const body =await result.json();
    setArticleInfo(body)
}


    return(
        <div id="add-comment-form">
        <h3>Add a comment</h3>
        <label style={{color:"black"}}>
            name:
            <input type="text" value={username} onChange={(event)=>setUsername(event.target.value)}/>
        </label>
        <label style={{color:"black"}}>
            Comments:
            <textarea rows="4" cols="50" value={commentText} onChange={(event)=>SetCommentText(event.target.value)} />
        </label>
        <button onClick={()=>addcomment()}>Add Comment</button>
        </div>
    )
}


export default AddCommentForm