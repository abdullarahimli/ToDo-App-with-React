import { useState } from "react";
import "./App.css";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todos], newTodo);
  };

  return (
    <>
      <div className="todo-main">
        <div className="title">
          <h1>To Do App</h1>
        </div>
        <TodoCreate onCreateTodo={createTodo} />
        <TodoList />
      </div>
    </>
  );
}

export default App;
