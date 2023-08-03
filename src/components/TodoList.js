import React from 'react';

const TodoList = () => {
  const todos = [
    { id: 1, text: '할 일 1', completed: false },
    { id: 2, text: '할 일 2', completed: true },
    { id: 3, text: '할 일 3', completed: false },
  ];

  return (
    <div className="todo-list">
      <h2>투두 목록</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span className={todo.completed ? 'completed' : 'incompleted'}>{todo.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;