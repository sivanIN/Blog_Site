import React from "react";

const UpcotesSection=({setArticleInfo,articleName,upvotes})=>{

    const upvoteArticle=async()=>{
     const result=   await fetch(`/api/articles/${articleName}/upvotes`,{
            method:'post',
        })
        const body = await result.json();
        setArticleInfo(body)
    }
    
    return(

<div id="upvotes-section">
    <button onClick={()=>upvoteArticle()}>Add Upvotes</button>
    <h6 > Article has {upvotes} upvotes </h6>
</div>
        )
    
    }

    export default UpcotesSection;