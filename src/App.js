// import React, { Component } from 'react';
import  HomePage from './Pages/HomePage';  

import  ArticlePage  from './Pages/ArticlePage';
import  ArticlesListPage from './Pages/ArticlesListPage';
import  AboutPage from './Pages/AboutPage';
// import NavBar from './NavBar';
import NotFoundpage from './Pages/NotFoundpage';
import './App.css';
import {
  BrowserRouter as Router,
   Routes,
  Route,
 
} from 'react-router-dom'
import Signup from './Pages/SignUp';
import Login from './Pages/Login';
import AddArticles from './Pages/AddArticles';

function App() {
   
    return (
     
      
          
      <Router>
    
<Routes>
     
       <Route path="/" element={<Signup/>} exact />
       <Route path="/login" element={<Login/>}/>
       <Route path="/Homepage" element={<HomePage/>} exact />
       <Route path="/about" element={<AboutPage/>} exact />
       <Route path="/AddArticle" element={<AddArticles/>} exact />
       {/* path to redirect the page according to article name */}
       <Route path="/Article/:name" element={<ArticlePage/>} exact />    
       <Route path="/Articles-list" element={<ArticlesListPage/>} exact />
       <Route path="*" element={<NotFoundpage/>} exact />
       
</Routes>

      </Router>
    
     
     
      
    );
  
}

export default App;
