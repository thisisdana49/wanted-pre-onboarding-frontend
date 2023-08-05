import React, { useState } from 'react';

const TodoList = ({ todos, onTodoUpdate, onTodoDelete }) => {

  const [editTodoId, setEditTodoId] = useState(null);
  const [editTodoText, setEditTodoText] = useState('');

  const handleEditInputChange = (event) => {
    setEditTodoText(event.target.value);
  };

  const handleEditSubmit = (todoId, todoIsCompleted) => {
    onTodoUpdate(todoId, editTodoText, todoIsCompleted);
    setEditTodoId(null);
    setEditTodoText('');
  };

  return (
    <div className="todo-list">
      <h2>투두 목록</h2>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            {editTodoId === item.id ? (
              <>
                <input type="text" value={editTodoText} onChange={handleEditInputChange} />
                <button onClick={() => handleEditSubmit(item.id, item.isCompleted)}>제출</button>
                <button onClick={() => setEditTodoId(null)}>취소</button>
              </>
            ) : (
              <>
                <input
                  type="checkbox"
                  checked={item.isCompleted}
                  onChange={() => onTodoUpdate(item.id, item.todo, !item.isCompleted)}
                />
                <span className={item.isCompleted ? 'completed' : 'incompleted'}>{item.todo}</span>
                <button onClick={() => {
                  setEditTodoId(item.id);
                  setEditTodoText(item.todo);
                }}>수정</button>
                <button onClick={() => onTodoDelete(item.id)}>삭제</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
