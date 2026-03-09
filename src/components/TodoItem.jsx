import { useState } from "react";

function TodoItem({ todo, toggleTodo, deleteTodo, updateTodo }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleKey = (e) => {
    if (e.key === "Enter") {
      updateTodo(todo.id, text);
      setEditing(false);
    }
    if (e.key === "Escape") {
      setText(todo.text);
      setEditing(false);
    }
  };

  return (
    <li className={`todo-item ${todo.completed ? "done" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />

      {editing ? (
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKey}
          autoFocus
        />
      ) : (
        <span onDoubleClick={() => setEditing(true)}>{todo.text}</span>
      )}

      <button onClick={() => deleteTodo(todo.id)}>삭제</button>
    </li>
  );
}

export default TodoItem;
