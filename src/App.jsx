import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import TodoFooter from "./components/TodoFooter";
import { loadTodos, saveTodos } from "./utils/storage";

function App() {
  const [todos, setTodos] = useState(loadTodos());
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  const updateTodo = (id, text) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, text } : t)));
  };

  const toggleAll = () => {
    const allCompleted = todos.every((t) => t.completed);
    setTodos(todos.map((t) => ({ ...t, completed: !allCompleted })));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((t) => !t.completed));
  };

  const filteredTodos = todos.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  const remaining = todos.filter((t) => !t.completed).length;

  return (
    <div className="app">
      <h1>Todo List</h1>

      <TodoInput addTodo={addTodo} />

      <TodoFilter filter={filter} setFilter={setFilter} />

      <div className="toggle-all">
        <input type="checkbox" onChange={toggleAll} />
        <label>Toggle All</label>
      </div>

      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />

      <TodoFooter remaining={remaining} clearCompleted={clearCompleted} />
    </div>
  );
}

export default App;
