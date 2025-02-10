function TodoList() {
  return (
    <table className="table table-bordered text-center">
      <thead className="table-light">
        <tr>
          <th>No.</th>
          <th>Todo item</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
}

export default TodoList;
