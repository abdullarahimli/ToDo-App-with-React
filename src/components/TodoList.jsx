import Todo from "./Todo";

function TodoList({ todos, onDeleteTodo }) {
  return (
    <table className="table table-bordered text-center">
      <thead className="table-light">
        <tr>
          <th style={{ width: "5%" }}>No.</th>
          <th style={{ width: "50%" }}>Todo item</th>
          <th style={{ width: "15%" }}>Status</th>
          <th style={{ width: "25%" }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos &&
          todos.map((todo) => (
            <Todo key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} />
          ))}
      </tbody>
    </table>
  );
}

export default TodoList;
