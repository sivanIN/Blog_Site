import React,{useState} from 'react';
import NavBar from '../NavBar';
import { Navigate  } from 'react-router-dom';

function AddArticles(props) {

    const Name = {
        color: "black",
        fontFamily: "Arial",
        marginLeft:"100px"
        
      };
      const title = {
        color: "black",
        fontFamily: "Arial",
        marginLeft:"100px"
        
      };
      const contents = {
        color: "black",
        // fontFamily: "Arial",
        marginRight:"1100px"
        
      };

      const [name,setname]=useState('');
      const [Title,setTitle]=useState('');
      const [Content,SetContent]=useState('');
      const[isSubmit,setIsSubmit]=useState(false)

      
      
      const addarticles=async()=>{
          alert("hello")

          setIsSubmit(true) 
      
          const result =await fetch(`/api/articles/addarticles`,{
              method:"post",
              body:JSON.stringify({name,Title,Content}),
              headers:{
                  'content-type':'application/json'
              }
          });
          const body =await result.json();

          
          
        
      }

      

   


    return (
        <>
        {  isSubmit  ? (<Navigate to='/Articles-list'/>) : (<pre className='pretext'>{name}</pre>)} 
        
        <NavBar/>
            <form>
        <label style={Name}>
          Name:
          <input  type="text" name="name"  value={name} onChange={(event)=>setname(event.target.value)} required/>
        </label>

        <label style={title}>
          Title:
          <input type="text" name="name"  value={Title} onChange={(event)=>setTitle(event.target.value)} required/>
        </label>
        
        <label style={contents}>
            Blog-Content:</label> 
            <textarea  style={{marginLeft:"400px"}} rows="8" cols="80"  value={Content} onChange={(event)=>SetContent(event.target.value)} required />
        
        <button onClick={()=>addarticles()}>Add Comment</button>
      </form>
        </>
    
    );
}

export default AddArticles;