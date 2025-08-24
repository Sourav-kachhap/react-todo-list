import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({
  todos,
  onDelete,
  onToggle,
  onEditStart,
  editId,
  editText,
  setEditText,
  onEditSave,
}) {
  if (todos.length === 0) {
    return (
      <p className="text-center text-gray-400">No tasks yet. Enjoy your free time!</p>
    );
  }
  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
          onEditStart={onEditStart}
          isEditing={editId === todo.id}
          editText={editText}
          setEditText={setEditText}
          onEditSave={onEditSave}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
