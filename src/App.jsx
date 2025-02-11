import "bootstrap/dist/css/bootstrap.min.css";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos((prevTodos) => {
      const updatedTodos = [
        ...prevTodos,
        { ...newTodo, status: "In progress" },
      ];
      return updatedTodos.map((todo, index) => ({
        ...todo,
        id: index + 1,
      }));
    });
  };
  console.log(todos)

  const deleteTodo = (todoId) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((todo) => todo.id !== todoId);
      return updatedTodos.map((todo, index) => ({
        ...todo,
        id: index + 1,
      }));
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">To Do App</h1>
      <TodoCreate onCreateTodo={createTodo} />
      <TodoList todos={todos} onDeleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
