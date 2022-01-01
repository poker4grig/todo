import React from "react";
import {Link} from "react-router-dom";



const ProjectItem = ({project, deleteProject}) => {
    return (
        <tr>
            <td>{project.id}</td>
            <td>
                <Link to={`projects/${project.name}`}>{project.name}</Link>
            </td>
            <td>{project.user}</td>
            <td>{project.repo}</td>
            <td>
                <button onClick={() => deleteProject(project.id)} type="button">Delete project</button>
            </td>
        </tr>
    )
}

const ProjectList = ({projects, deleteProject}) => {
    return (
        <div>
            <table>
                <th>Project id</th>
                <th>Project name</th>
                <th>Project user</th>
                <th>Project repo</th>
                <th>

                </th>
                {projects.map((project) => <ProjectItem project={project} deleteProject={deleteProject}/>)}
            </table>
            <Link to='/projects/create'>Crete project</Link>

        </div>

    )
}


export default ProjectList