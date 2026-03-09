import { useState } from "react";

function TodoInput({ addTodo }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  const handleKey = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  return (
    <div className="input-area">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKey}
        placeholder="할 일을 입력하세요"
      />
      <button onClick={handleAdd}>추가</button>
    </div>
  );
}

export default TodoInput;
