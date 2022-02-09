import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import { useParams } from "react-router-dom";   // to use the params in  Url
import articles from "./article-conten";
import ArticlesList from"../Components/ArticlesList"
import Commentlist from "../Components/Commentlist";
import UpcotesSection from "../Components/UpvotesSection";
import AddCommentForm from "../Components/AddCommentForm";

const ArticlePage=()=>{
    const { name } = useParams();  // to call the params in the link

    const [articleInfo,setArticleInfo]=useState({Title:'',name:'',content:'',upvotes:0,comments:[]});

    useEffect(()=>{
        const fetchData= async()=>{
             const result= await fetch(`/api/articles/${name}`)
             const body=await result.json()
             setArticleInfo(body)  
             console.log(body)
        }
        fetchData()
    },[name])

   
    const article=articleInfo.name === name
   
    if(!article){return(
        <>  
        <NavBar/>
        <div id="page-body">
        <h1>arti</h1>
        </div></>
      );}
    return(
    <>
    <NavBar/>
    <div id="page-body">
  
    <h1> {articleInfo.Title}</h1>
   <UpcotesSection articleName={name} upvotes={articleInfo.upvotes}  setArticleInfo={setArticleInfo} />
    {/* <h6 > Article has {articleInfo.upvotes} upvotes </h6> */}
   
    <p >{articleInfo.content}</p>

<Commentlist comments={articleInfo.comments}/>

<AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />



    </div>
    
    </>
);}

export default ArticlePage;