import React from 'react';

/*
    overall div to contain
    img/screenshot of page on click brings to github
    link to  deployed site, github

*/

function ProjectTemplate(props){
    return(
        <div className = 'projectComponent'>
            <h2>{props.title}</h2>
            <a href={props.githubLink}>GitHub link</a>
            <img src={props.img}/>
        </div>
    )
}

export default ProjectTemplate;