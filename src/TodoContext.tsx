import React, { createContext, useContext, useState, useRef, ReactNode } from 'react';

export type TodoItem = {
  id: number;
  task: string;
};

type TodoContextType = {
  todos: TodoItem[];
  addTodo: (task: string) => void;
  deleteTodo: (id: number) => void;
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const useTodos = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodos must be used within a TodoProvider');
  }
  return context;
};

type TodoProviderProps = {
  children: ReactNode;
};

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const nextId = useRef(1);

  const addTodo = (task: string) => {
    const newTodo: TodoItem = {
      id: nextId.current++,
      task: task.trim(),
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
