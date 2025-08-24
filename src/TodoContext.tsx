import React, { createContext, useContext, ReactNode } from 'react';
import { useTodoManager, TodoItem } from './hooks/useTodoManager';

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
  const { todos, addTodo, deleteTodo } = useTodoManager();

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
