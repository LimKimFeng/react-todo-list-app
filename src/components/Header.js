import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Header = ({ addTodo }) => {
    const [input, setInput] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            addTodo({
                title: input,
                completed: false,
            });
            setInput('');
        }
    };

    return (
        <header>
            <h1>My To-Do List</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Add a new task..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit"><FaPlus /></button>
            </form>
        </header>
    );
};

export default Header;
