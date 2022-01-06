import React, {useState} from "react";


export default function Nabvar(props){

    //If the key pressed is Enter, then set search to what is in text box
    function handleSearch(e){
      if(e.keyCode === 13){
        props.handleChange(e.target.value);
      }
    }

    return(
        <nav className="navbar">
            <a href="/" className="nav-text">Find Flix</a>
            <input onKeyDown={handleSearch} type="text" className="nav-search" placeholder="Search for a movie" /> 
        </nav>
    )
}