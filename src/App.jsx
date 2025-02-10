import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center">To Do App</h1>
      <TodoCreate />
      <TodoList />
    </div>
  );
}

export default App;
