import React from "react";
import "../styles/todo.css";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function Todo() {
  return (
    <div className="todo">
      {/* <ul>
        <li>
          <div className="number">
            <input type="checkbox" name="" id="" />
          </div>
          <div className="title">
            <p>Ben ilk todoyum</p>
          </div>
          <div className="action">
            <p>Action</p>
          </div>
          <div className="buttons">
            <button className="btn btn-warning">DELETE</button>
            <button className="btn btn-danger">FINISHED</button>
          </div>
        </li>
      </ul> */}

      <div className="my-table">
        <table className="table m-0">
          <thead className="table-head">
            <tr>
              <th>№</th>
              <th>Name</th>
              <th>Status</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="table-body">
            <tr>
              <td>1</td>
              <td>Ben ilk todoyum</td>
              <td>In Progress</td>
              <td className="buttons">
                <button className="btn btn-warning btn-sm text-white">
                  <MdEdit />
                </button>
              </td>
              <td>
                <button className="btn btn-danger btn-sm">
                  <MdDelete />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Todo;
