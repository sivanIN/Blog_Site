import React from "react";
import { Link } from "react-router-dom";
import './App.css';

const NavBar=()=>(
    <>
    <nav>
    <ul>
        <li>
            <Link to="/Homepage" >Home</Link>
           
        </li>
        <li>
            <Link to="/about" >about</Link>
           
        </li>
        {/* <li>
            <Link to="/Articles" >Article</Link>
           
        </li> */}
        <li>
            <Link to="/Articles-list" >Articles</Link>
           
        </li>
    </ul>
    </nav>
    </>
)

export default NavBar;