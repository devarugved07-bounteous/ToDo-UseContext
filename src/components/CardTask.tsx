import React from 'react';
import { useTodos } from '../TodoContext';

function CardTask() {
  const { todos, deleteTodo } = useTodos();

  if (todos.length === 0) {
    return <p className="empty-msg">No tasks yet. Add one above!</p>;
  }

  return (
    <div className="card-list">
      {todos.map((todo) => (
        <div key={todo.id} className="task-card">
          <span>{todo.task}</span>
          <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default CardTask;
