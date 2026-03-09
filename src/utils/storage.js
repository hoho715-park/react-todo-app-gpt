const STORAGE_KEY = "react-todo-list";

export const loadTodos = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveTodos = (todos) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};
