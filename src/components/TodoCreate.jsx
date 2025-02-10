import { useState } from "react";

function TodoCreate() {
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
      />
      <button style={{ width: "10%" }} className="btn btn-primary">
        ADD TASK
      </button>
      <button style={{ width: "10%" }} className="btn btn-warning">
        GET TASKS
      </button>
    </div>
  );
}

export default TodoCreate;
