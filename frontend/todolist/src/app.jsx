import React, { useState, useEffect } from "react";
import axios from "axios";
import './app.css'
const App = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [done, setDone] = useState(false);

  // Fetch todos when the component mounts
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/todos")
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => {
        console.error("Error fetching todos:", error);
      });
  }, []);

  // Handle adding a new todo
  const handleAddTodo = () => {
    const newTodo = { title, done };
    axios.post("http://127.0.0.1:8000/todos", newTodo)
      .then(response => {
        setTodos([...todos, response.data]);
        setTitle("");
        setDone(false);
      })
      .catch(error => {
        console.error("Error adding todo:", error);
      });
  };

  // Handle deleting a todo
  const handleDeleteTodo = (todoTitle) => {
    axios.delete(`http://127.0.0.1:8000/todos/${todoTitle}`)
      .then(response => {
        setTodos(todos.filter(todo => todo.title !== todoTitle));
      })
      .catch(error => {
        console.error("Error deleting todo:", error);
      });
  };

  return (
    <div  className="mainContainer">
      <h1>To-Do App</h1>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter a new task"
        />
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={() => setDone(!done)}
          />
          Done
        </label>
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.title} {todo.done ? "(Done)" : "(Not Done)"}
            <button onClick={() => handleDeleteTodo(todo.title)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
