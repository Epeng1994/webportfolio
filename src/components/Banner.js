import {Link} from 'react-router-dom'

function banner(){

    return(
        <div className ='banner-div'>
            <h1>Eric Peng's Portfolio</h1>
            <nav>
                <a href = '#home'>Home</a>
                <a href = '#aboutme'>About Me</a>
                <a href = '#skills'>Skills</a>
                <a href = '#projects'>Projects</a>
                <a href = '#contactme'>Contact Me</a>
            </nav>
        </div>
    )
}


export default banner