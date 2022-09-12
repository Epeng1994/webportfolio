import SkillsTemplate from "./Templates/SkillsTemplate";

function Skills(){
    const skillsMap = ['CSS', 'HTML5', 'JS', 'NODEJS', 'REACT','REDUX','GIT','API','GITHUB','JEST','EXPRESS','FIGMA','JIRA','VS1']
    return(
        <div className = 'skills' id='skills'>
            <h1>Skills</h1>
            <div className ='skillsicons'>
                {
                    skillsMap.map(a=>{
                        return SkillsTemplate(a)
                    })
                }
            </div>
        </div>
    )
}

//<a href="https://www.flaticon.com/free-icons/sql" title="sql icons">Sql icons created by juicy_fish - Flaticon</a>

export default Skills