import { useState } from "react";

function TodoCreate({ onCreateTodo }) {
  const [task, setTask] = useState("");

  const createTodo = () => {
    if (!task.trim()) {
      alert("Task can not be empty !");
      return;
    }
    onCreateTodo({ content: task.trim() });
    setTask("");
  };
  const enterKey = (e) => {
    if (e.key === "Enter") {
      createTodo();
    }
  };
  return (
    <div
      style={{ width: "100%", height: "50px" }}
      className="d-flex gap-2 my-3"
    >
      <input
        style={{ width: "80%" }}
        className="form-control"
        type="text"
        placeholder="Enter a task here"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={enterKey}
      />
      <button
        onClick={createTodo}
        style={{ width: "10%" }}
        className="btn btn-primary fw-semibold"
      >
        ADD TASK
      </button>
      <button
        style={{ width: "10%" }}
        className="btn btn-warning text-white fw-semibold"
      >
        GET TASKS
      </button>
    </div>
  );
}

export default TodoCreate;
