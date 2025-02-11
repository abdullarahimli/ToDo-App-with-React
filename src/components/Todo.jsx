import { useState } from "react";
import "../styles/todo.css";
function Todo({ todo, onDeleteTodo }) {
  const { id, content, status } = todo;
  const [editable, setEditable] = useState(false);

  const deleteTodo = () => {
    onDeleteTodo(id);
  };
  const toggleEdit = () => {
    setEditable((prev) => !prev); // editable değerini tersine çevir
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{content}</td>
      <td>
        <span>{status}</span>
      </td>
      <td>
        <button
          onClick={toggleEdit}
          className={`btn ${
            editable ? "btn-success fw-bold" : "btn-warning fw-semibold"
          } text-white`}
        >
          {editable ? "DONE" : "EDIT"}
        </button>

        <button
          onClick={deleteTodo}
          className="btn btn-danger ms-2 me-2 fw-semibold"
        >
          DELETE
        </button>
        <button className="btn btn-success fw-semibold">FINISHED</button>
      </td>
    </tr>
  );
}

export default Todo;
