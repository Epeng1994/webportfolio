import ProjectTemplate from "../Templates/ProjectTemplate";
import './Projects.css'

function Projects(){
    const projArr = [
        {
            title:'Weather With You',
            githubLink:'https://github.com/Epeng1994/weatherApp',
            hostLink:'https://weather-app-git-main-epeng1994.vercel.app/',
            img:'weather_with_you.gif'
        },
        {
            title:'HRF Asylum Report',
            githubLink:'https://github.com/BloomTech-Labs/asylum-rg-fe',
            hostLink:'https://asylum-rg-fe-git-main-bloomtech-labs.vercel.app/',
            img:'HRFasylum.gif'
        },
    ]


    return(
        <div className = 'projects' id='projects'>
            <h1>Projects</h1>
            <div className = 'container-row'>
            {
                projArr.map(project=>{
                    return(
                        <ProjectTemplate project={project}/>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Projects