import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';

const TodoItem = ({ todo, deleteTodo, toggleComplete, editTodo }) => {
    return (
        <li className={todo.completed ? 'completed' : ''}>
            <span onClick={() => toggleComplete(todo.id)}>{todo.title}</span>
            <div>
                <button onClick={() => editTodo(todo)}><FaEdit /></button>
                <button onClick={() => deleteTodo(todo.id)}><FaTrash /></button>
            </div>
        </li>
    );
};

export default TodoItem;
