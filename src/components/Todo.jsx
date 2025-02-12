import { useState } from "react";
import "../styles/todo.css";
function Todo({ todo, onDeleteTodo, onUpdateTodo, onFinishedTodo }) {
  const { id, content, status } = todo;
  const [editable, setEditable] = useState(false);
  const [newTodo, setNewTodo] = useState(content);

  const deleteTodo = () => {
    onDeleteTodo(id);
  };
  const toggleEdit = () => {
    if (editable) {
      updateTodo();
    }
    setEditable((prev) => !prev); // editable değerini tersine çevir
  };

  const updateTodo = () => {
    const request = {
      id,
      content: newTodo,
      status: status,
    };
    onUpdateTodo(request);
    setEditable(true);
  };
  const finishedTodo = () => {
    const updatedTodo = {
      ...todo,
      status: "Finished",
    };
    onFinishedTodo(updatedTodo);
  };
  return (
    <tr>
      <td>{id}</td>
      <td>
        {editable ? (
          <input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="form-control"
            type="text"
          />
        ) : (
          content
        )}
      </td>
      <td>
        <span
          className={status === "Finished" ? "text-success" : "text-warning"}
        >
          {status}
        </span>
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
        <button onClick={finishedTodo} className="btn btn-success fw-semibold">
          FINISHED
        </button>
      </td>
    </tr>
  );
}

export default Todo;
