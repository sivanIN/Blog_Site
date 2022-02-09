import React,{useState,useEffect}  from "react";
import NavBar from "../NavBar";
// import articles from "./article-conten";
import { Link } from "react-router-dom";

import ArticlesList from "../Components/ArticlesList"

const ArticlesListPage=()=>{ 

    let styles = {
        marginLeft: '1000px',
        width: '250px',
        height: '250px',
        backgroundColor: 'black',
        textDecoration:'none',
        // marginBottom:"20px",
        color:"white",
        padding:"10px"
      };


    const [articleInfo,setArticleInfo]=useState([]);

    useEffect(()=>{
        const fetchData= async()=>{
             const result= await fetch(`/api/articles`)
             const body=await result.json()
             setArticleInfo(body)  
             
        }
        fetchData()
    },[])
    
    return(
    <>
    {console.log(articleInfo)}
    <NavBar/>
    <div id="page-body">
    <ArticlesList   articles={articleInfo}/>
    </div>
   
    <Link to="/AddArticle" style={styles} >Add New Article</Link>

    </>
);}

export default ArticlesListPage;