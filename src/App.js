import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import TodoList from './components/TodoList';
import './styles.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/todos')
      .then((res) => setTodos(res.data))
      .catch((err) => console.error(err));
  }, []);

  const addTodo = (todo) => {
    axios.post('http://localhost:3001/todos', todo)
      .then((res) => setTodos([...todos, res.data]))
      .catch((err) => console.error(err));
  };

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:3001/todos/${id}`)
      .then(() => setTodos(todos.filter((todo) => todo.id !== id)))
      .catch((err) => console.error(err));
  };

  const toggleComplete = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    axios.put(`http://localhost:3001/todos/${id}`, { ...todo, completed: !todo.completed })
      .then((res) => {
        setTodos(todos.map((todo) =>
          todo.id === id ? res.data : todo
        ));
      })
      .catch((err) => console.error(err));
  };

  const editTodo = (todo) => {
    const newTitle = prompt('Edit the task title', todo.title);
    if (newTitle) {
      axios.put(`http://localhost:3001/todos/${todo.id}`, { ...todo, title: newTitle })
        .then((res) => {
          setTodos(todos.map((t) => (t.id === todo.id ? res.data : t)));
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className="app">
      <Header addTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
      />
    </div>
  );
};

export default App;
