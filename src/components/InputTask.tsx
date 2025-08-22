import React, { useState } from 'react';
import { useTodos } from '../TodoContext';

function InputTask() {
  const [task, setTask] = useState('');
  const { addTodo } = useTodos();

  const handleAdd = () => {
    if (task.trim()) {
      addTodo(task);
      setTask('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">Deva Rugved's To Do List</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyDown}
          className="input-box"
        />
        <button onClick={handleAdd} className="submit-btn" disabled={!task.trim()}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default InputTask;
