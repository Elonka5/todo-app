import { NextResponse } from "next/server";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getTodos = async () => {
  const res = await fetch(`${BASE_URL}/todos?_limit=10`);
  const data = await res.json();
  return data;
};

export const createTodo = async (todo) => {
  const res = await fetch(`${BASE_URL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...todo, completed: false }),
  });
  return res.json();
};

export const deleteTodo = async (id) => {
  await fetch(`${BASE_URL}/todos/${id}`, {
    method: "DELETE",
  });
};
