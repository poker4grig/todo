import React from "react";



const UserItem = ({user}) => {
    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
        </tr>
    )
}

const UserList = ({users}) => {
    return (
        <table>
            <th>User id</th>
            <th>User name</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            {users.map((user) => <UserItem user={user}/>)}
        </table>

    )
}


export default UserList

