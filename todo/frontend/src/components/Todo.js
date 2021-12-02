import React from "react";


const TodoItem = ({todo}) => {
    return (
        <tr>
            <td>{todo.user}</td>
            <td>{todo.project}</td>
            <td>{todo.text}</td>
            <td>{todo.created}</td>
            <td>{todo.updated}</td>
            <td>{todo.isActive}</td>
        </tr>
    )
}

const TodoList = ({todos}) => {
    return (
        <table>
            <th>Todo user</th>
            <th>Todo project</th>
            <th>Todo text</th>
            <th>Todo created</th>
            <th>Todo updated</th>
            <th>Todo is active?</th>
            {todos.map((todo) => <TodoItem todo={todo}/>)}
        </table>

    )
}

export default TodoList
