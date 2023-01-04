import React from 'react';

function Banner(){


    const handleOnClick = e =>{
        
    }

    return(
        <div className ='banner-div'>
            <h1>Eric Peng's Portfolio</h1>
            <nav>
                <a href = '#home' onClick ={handleOnClick}>Home</a>
                <a href = '#aboutme' onClick ={handleOnClick}>About Me</a>
                <a href = '#skills' onClick ={handleOnClick}>Skills</a>
                <a href = '#projects' onClick ={handleOnClick}>Projects</a>
                <a href = '#contactme' onClick ={handleOnClick}>Contact Me</a>
            </nav>
        </div>
    )
}


export default Banner