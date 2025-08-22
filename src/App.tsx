/* eslint-disable @typescript-eslint/no-unused-vars */


import React, { useState } from 'react';
import './App.css';
import InputTask from './components/InputTask';
import CardTask from './components/CardTask';
import { TodoProvider } from './TodoContext';

type TodoItem = {
  id: number;
  task: string;
};

function App() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const nextId = React.useRef(1);

  const addTodo = (task: string) => {
    const newTodo: TodoItem = {
      id: nextId.current++,
      task: task.trim(),
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <TodoProvider>
        <InputTask />
        <CardTask />
      </TodoProvider>
    </>
  );
}

export default App;
 