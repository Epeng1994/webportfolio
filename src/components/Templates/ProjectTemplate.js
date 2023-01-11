import React from 'react';

function ProjectTemplate(props){

    const {title, githubLink, img} = props.project
    
    return(
        <div className = 'projectComponent'>
            <h2>{title}</h2>
            <a href={githubLink}><img alt = 'github' className = 'icon-small' src= './assets/github.png'/></a>
            <img className = 'project-gif' alt = 'project-gif' src={`./assets/${img}`}/>
        </div>
    )
}

export default ProjectTemplate;