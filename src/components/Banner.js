import React from 'react'

function Banner(){

    const handleOnClick = e =>{
        console.log(e.target)
    }

    return(
        <div className ='banner-div'>
            <h1>Eric Peng's Portfolio</h1>
            <nav>
                <div name = '#home' onClick ={handleOnClick}>Home</div>
                <div name = '#aboutme' onClick ={handleOnClick}>About Me</div>
                <div name = '#skills' onClick ={handleOnClick}>Skills</div>
                <div name = '#projects' onClick ={handleOnClick}>Projects</div>
                <div name = '#contactme' onClick ={handleOnClick}>Contact Me</div>
            </nav>
        </div>
    )
}


export default Banner