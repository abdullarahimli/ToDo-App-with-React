import "../styles/todoCreate.css";
import { IoAddCircleOutline } from "react-icons/io5";

function TodoCreate({ onCreateTodo }) {
  const onCreateTodo = () => {};
  return (
    <div className="todo-header">
      <input
        className="form-control"
        type="text"
        placeholder="Enter a task here"
      />
      <div className="todo-header-buttons">
        <button className="btn btn-primary">Add task</button>
        <button className="btn btn-warning">Get tasks</button>
      </div>
      <div className="bottom-line"></div>
    </div>
  );
}

export default TodoCreate;
