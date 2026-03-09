function TodoFilter({ filter, setFilter }) {
  return (
    <div className="filters">
      <button
        className={filter === "all" ? "active" : ""}
        onClick={() => setFilter("all")}
      >
        전체
      </button>

      <button
        className={filter === "active" ? "active" : ""}
        onClick={() => setFilter("active")}
      >
        진행중
      </button>

      <button
        className={filter === "completed" ? "active" : ""}
        onClick={() => setFilter("completed")}
      >
        완료
      </button>
    </div>
  );
}

export default TodoFilter;
