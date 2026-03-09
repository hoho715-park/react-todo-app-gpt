import TodoItem from "./TodoItem";

function TodoList({ todos, toggleTodo, deleteTodo, updateTodo }) {
  if (todos.length === 0) {
    return <p className="empty">할 일을 추가해보세요!</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
