import React from "react";

const Commentlist=({comments})=>{
    return(
<>
<h3>comments:</h3>
{
    comments.map((comments,key)=>(
    <div className="comments" key={key}>
       <h4>{comments.username}</h4>
       <p>{comments.text}</p>
    </div>))
}
</>
    )
}

export default Commentlist;