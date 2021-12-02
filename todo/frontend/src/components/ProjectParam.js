import React from "react";
import {Link, useParams} from "react-router-dom";


const ProjectItem = ({project}) => {
    return (
        <tr>
            <td>{project.name}</td>
            <td>{project.user}</td>
            <td>{project.repo}</td>
        </tr>
    )
}

const ProjectParam = ({projects}) => {
    let param = useParams()
    let filtered_projects = projects.filter(project => project.name === param.name)

    return (
        <table>
            <th>Project name</th>
            <th>Project user</th>
            <th>Project repo</th>
            {filtered_projects.map((project) => <ProjectItem project={project}/>)}
        </table>

    )
}


export default ProjectParam