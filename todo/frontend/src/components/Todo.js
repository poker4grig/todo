import React from "react";
import {Link} from "react-router-dom";


const TodoItem = ({todo, deleteTodo}) => {
    return (
        <tr>
            <td>{todo.id}</td>
            <td>{todo.user}</td>
            <td>{todo.project}</td>
            <td>{todo.text}</td>
            <td>{todo.created}</td>
            <td>{todo.updated}</td>
            <td style={{textAlign: "center"}}>{String(todo.isActive)}</td>
            <td>
                <button onClick={() => deleteTodo(todo.id)} type="button">Delete todo</button>
            </td>
        </tr>
    )
}

const TodoList = ({todos, deleteTodo}) => {
    return (
        <div>
            <table>
                <th>Todo id</th>
                <th>Todo user</th>
                <th>Todo project</th>
                <th>Todo text</th>
                <th>Todo created</th>
                <th>Todo updated</th>
                <th>Todo is active?</th>
                <th>

                </th>
                {todos.map((todo) => <TodoItem todo={todo} deleteTodo={deleteTodo}/>)}
            </table>
            <Link to='/todo/create' >Create todo</Link>
        </div>
    )
}

export default TodoList
