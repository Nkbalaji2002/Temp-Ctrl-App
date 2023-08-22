import React from "react";
import ToDoList from "./components/ToDoList";

export const App: React.FC = () => {
  return (
    <>
      <div className="app">
        <ToDoList />
      </div>
    </>
  );
};
