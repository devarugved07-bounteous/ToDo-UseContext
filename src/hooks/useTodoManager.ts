import { useRef, useState } from 'react';

export type TodoItem = {
  id: number;
  task: string;
};

export function useTodoManager() {
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

  return { todos, addTodo, deleteTodo };
}
