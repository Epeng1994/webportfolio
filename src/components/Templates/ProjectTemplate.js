import React from 'react';

/*
    overall div to contain
    img/screenshot of page on click brings to github
    link to  deployed site, github

*/

function ProjectTemplate(props){

    const {title, githubLink, img} = props.project
    
    return(
        <div className = 'projectComponent'>
            <h2>{title}</h2>
            <a href={githubLink}>GitHub link</a>
            <img src={`./assets/${img}`}/>
        </div>
    )
}

export default ProjectTemplate;