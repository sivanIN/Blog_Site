import React from "react";
import { Link } from "react-router-dom";



const ArticlesList=function({articles}){


    const Delete=async (name)=>{
    
     
     alert("hello")
     const result=   await fetch(`/api/articles/${name}/delete`,{
        method:'delete',
    })
    const body = await result.json();

    window.location.reload(true);
    
        
    }
    



    console.log(articles)
    return(
        <>
 <div id="page-body">
    <h1>Articles </h1>
    {/* <h3>{articles[0].name}</h3> */}
    {/* {Object.key(articles).map((items,i)=>(<h1>{articles.list}</h1>))} */}
    {articles.map((article,key)=>(
        <>
         <button style={{width:"70px",marginRight:"40px"}} onClick={()=>Delete(article.name)}>Delete</button>
        <Link to={`/Article/${article.name}`} className="article-list-item">
            
            <h1 key={key}>{article.name}</h1> 
            
       <p>{article.content}......</p>
           </Link>
          
           
        </>
        
   
    )
    )}
   


    </div>
   
        </>


    )
}
 
export default  ArticlesList;