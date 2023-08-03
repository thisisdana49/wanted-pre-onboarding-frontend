import React from 'react';
import Header from '../components/Header';
import TodoList from '../components/TodoList';

const TodoPage = () => {
  return (
    <div>
      <Header />
      <div className="page-container">
        <TodoList />
      </div>
    </div>
  );
};

export default TodoPage;