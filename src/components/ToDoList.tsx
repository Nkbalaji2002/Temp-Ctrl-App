import React, { useEffect, useState } from "react";
import "./ToDoList.css";
import localforage from "localforage";
import { Add, Delete } from "@mui/icons-material";

interface Todo {
  id: number;
  text: string;
  completed?: boolean;
}

const ToDoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  useEffect(() => {
    // load tasks from local storage when component mounts
    localforage.getItem<Todo[]>("todos").then((savedTodos) => {
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
      const newTodoItem: Todo = {
        id: Date.now(),
        text: newTodo,
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== index);
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
          <button onClick={handleAddTodo}>
            <Add />
          </button>
        </div>
        <ul className="todos">
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                <span>{todo.text}</span>
                <button onClick={() => handleDeleteTodo(todo.id)}>
                  <Delete />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ToDoList;
