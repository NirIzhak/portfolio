import { useEffect, useState } from 'react';
import Project from '../components/Project';
import projectsData from '../data/projects.json';

const Projects = ()=>{

    const [projects, setProjects] = useState([]);
    
    const fillProjects = ()=>{
        setProjects(projectsData);
    }

    useEffect(()=>{
        fillProjects();
    },[]);

    return(
        <div className="projects">
            {
                projects.map((p,i)=> <Project key={i} {...p}/>)
            }
        </div>
    )

}
export default Projects;