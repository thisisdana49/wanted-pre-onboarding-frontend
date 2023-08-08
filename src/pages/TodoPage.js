import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from '../components/TodoList';
import './TodoPage.css'

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const fetchTodos = () => {
    const accessToken = localStorage.getItem('accessToken');

    axios
      .get('https://www.pre-onboarding-selection-task.shop/todos', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        alert('Todo 가져오기에 실패했습니다. 다시 시도해주세요.');
      });
  };

  const handleAddTodo = () => {
    const accessToken = localStorage.getItem('accessToken');

    axios
      .post('https://www.pre-onboarding-selection-task.shop/todos',
        { todo: newTodo },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        setTodos([...todos, response.data]);
        setNewTodo('');
      })
      .catch((error) => {
        alert('Todo 생성에 실패했습니다. 다시 시도해주세요.');
      });
  };

  const handleTodoUpdate = (id, todo, isCompleted) => {
    const accessToken = localStorage.getItem('accessToken');
    const updatedTodo = { 
      todo: todo, 
      isCompleted: isCompleted 
    };
    axios
      .put(`https://www.pre-onboarding-selection-task.shop/todos/${id}`, updatedTodo, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        fetchTodos();
      })
      .catch((error) => {
        alert('투두 수정에 실패했습니다.', error);
      });
  };

  const handleTodoDelete = (id) => {
    const accessToken = localStorage.getItem('accessToken');
    axios
      .delete(`https://www.pre-onboarding-selection-task.shop/todos/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        fetchTodos();
      })
      .catch((error) => {
        alert('투두 삭제에 실패했습니다.', error);
      });
  };


  useEffect(() => {
    fetchTodos();
  }, []);


  return (
    <div className='todo-container'>
      <h2>My Todo List</h2>
      <div>
        <input
          data-testid="new-todo-input"
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button 
          data-testid="new-todo-add-button"
          onClick={handleAddTodo}
        >
            추가
        </button>
      </div>
      <div className="page-container">
        <TodoList todos={todos} onTodoUpdate={handleTodoUpdate} onTodoDelete={handleTodoDelete} />
      </div>      
    </div>
  );
};

export default TodoPage;
