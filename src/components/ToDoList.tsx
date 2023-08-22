import React, { useEffect, useState } from "react";
import "./ToDoList.css";
import localforage from "localforage";

const ToDoList: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    // load tasks from local storage when component mounts
    localforage.getItem<string[]>("todos").then((savedTodos) => {
      if (savedTodos) {
        console.log("Loading from local storage: ", savedTodos);
        setTodos(savedTodos);
      }
    });
  }, []);

  useEffect(() => {
    // save tasks to local storage whenever the todos state changes
    localforage.setItem("todos", todos);
    console.log(`saving to local storage: `, todos);
  }, [todos]);

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <>
      {/* to-do-list container */}
      <div className="container">
        <h1>To-Do-List</h1>
        <div className="todo-form">
          <input
            type="text"
            placeholder="Add a new todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button onClick={handleAddTodo}>Add</button>
        </div>
        <ul className="todos">
          {todos.map((todo, index) => {
            return (
              <li key={index}>
                {todo}
                <button onClick={() => handleDeleteTodo(index)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ToDoList;
