function TodoFooter({ remaining, clearCompleted }) {
  return (
    <div className="footer">
      <span>{remaining}개 남음</span>
      <button onClick={clearCompleted}>완료 항목 삭제</button>
    </div>
  );
}

export default TodoFooter;
