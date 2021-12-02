import React from "react";
import {Link, useParams} from "react-router-dom";


const ProjectItem = ({project, users}) => {
    console.log(project.user)
    // console.log(users)
    let wer = project.user.map(userID => ((users.find((user) => user.id == userID).username)))

    console.log(wer)

    return (
        <tr>
            <td>{project.name}</td>
            <td>
                {project.user.map((userID) => {return users.find((user) => user.id === userID)})}
            </td>
            <td>

                {project.user.map((userID) => {return users.find((user) => user.id == userID)})}

            </td>
            <td>{project.repo}</td>
        </tr>
    )
}

const ProjectParam = ({projects, users}) => {
    let param = useParams()
    let filtered_projects = projects.filter(project => project.name === param.name)

    return (
        <table>
            <th>Project name</th>
            <th>Project user</th>
            <th>Project repo</th>
            {filtered_projects.map((project) => <ProjectItem project={project} users={users}/>)}
        </table>

    )
}


export default ProjectParam