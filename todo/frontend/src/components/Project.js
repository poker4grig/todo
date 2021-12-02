import React from "react";
import {Link} from "react-router-dom";


const ProjectItem = ({project}) => {
    return (
        <tr>
            <td>
                <Link to={`projects/${project.name}`}>{project.name}</Link>
            </td>
            <td>{project.user}</td>
            <td>{project.repo}</td>
        </tr>
    )
}

const ProjectList = ({projects}) => {
    return (
        <table>
            <th>Project name</th>
            <th>Project user</th>
            <th>Project repo</th>
            {projects.map((project) => <ProjectItem project={project}/>)}
        </table>

    )
}


export default ProjectList