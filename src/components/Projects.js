import ProjectTemplate from "./Templates/ProjectTemplate";


function Projects(){
    const projArr = [
        {
            title:'Weather With You',
            githubLink:'https://github.com/Epeng1994/weatherApp',
            img:'weather_with_you.png'
        }
    ]


    return(
        <div className = 'projects' id='projects'>
            {
                projArr.map(project=>{
                    return(
                        <ProjectTemplate project={project}/>
                    )
                })
            }

        </div>
    )
}

export default Projects