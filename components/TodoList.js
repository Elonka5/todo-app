"use client";
import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";


const TodoList = ({ initTodos }) => {
  const [todos, setTodos] = useState(initTodos);

  const handleAdd = (newTodo) => {
    setTodos([newTodo, ...todos]);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <TodoForm onAdd={handleAdd} />
      <div className="flex justify-between items-center bg-gray-200 p-4 rounded-md w-2/3 mx-auto">
        <p>Status</p>
        <p className="ml-8">Task</p>
        <p>Action</p>
      </div>
      <ul className="flex flex-col gap-3 w-2/3 mx-auto">
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} onDelete={handleDelete} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
