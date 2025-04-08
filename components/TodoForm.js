"use client";
import { createTodo } from "@/services/api";
import { useState } from "react";

const TodoForm = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (newTodo.trim() === "") return;
    const id = Date.now();
    const res = await createTodo({ title: newTodo, id });
    if (onAdd) onAdd({ ...res, id });
    setNewTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-4 items-center justify-center">
        <input
          value={newTodo}
          onChange={(evt) => setNewTodo(evt.target.value)}
          type="text"
          placeholder="Type your todo"
          className="block w-1/5 h-10 rounded-md  bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        />
        <button className="rounded-md relative w-36 h-10 cursor-pointer flex items-center border border-indigo-600 bg-indigo-600 group hover:bg-indigo-600 active:indigo-600 active:indigo-600">
          <span className="text-white font-semibold ml-7 transform group-hover:translate-x-20 transition-all duration-300">
            Add Todo
          </span>
          <span className="absolute right-0 h-full w-10 rounded-md bg-indigo-600 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
            <svg
              className="svg w-8 text-white"
              fill="none"
              height="24"
              stroke="currentColor"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="12" x2="12" y1="5" y2="19"></line>
              <line x1="5" x2="19" y1="12" y2="12"></line>
            </svg>
          </span>
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
