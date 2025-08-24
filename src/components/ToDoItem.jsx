import React from "react";

function ToDoItem({
  todo,
  onDelete,
  onToggle,
  onEditStart,
  isEditing,
  editText,
  setEditText,
  onEditSave,
}) {
  return (
    <li
      className={`flex items-center justify-between bg-gray-50 px-4 py-2 rounded shadow-sm ${
        todo.completed ? "opacity-60" : ""
      }`}
    >
      {isEditing ? (
        <>
          <input
            type="text"
            className="flex-1 py-1 px-2 border border-gray-300 rounded mr-2"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button
            className="bg-green-500 text-white rounded px-3 py-1 mr-1 hover:bg-green-600"
            onClick={onEditSave}
          >
            Save
          </button>
        </>
      ) : (
        <>
          <span
            className={`flex-1 cursor-pointer ${
              todo.completed ? "line-through text-gray-400" : ""
            }`}
            onClick={() => onToggle(todo.id)}
          >
            {todo.text}
          </span>
          <div className="flex space-x-2">
            <button
              className="bg-yellow-400 text-white rounded px-3 py-1 hover:bg-yellow-500"
              onClick={() => onEditStart(todo.id, todo.text)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 text-white rounded px-3 py-1 hover:bg-red-600"
              onClick={() => onDelete(todo.id)}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default ToDoItem;
