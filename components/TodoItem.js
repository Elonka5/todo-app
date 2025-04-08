import { deleteTodo } from "@/services/api";

const TodoItem = ({ todo, onDelete }) => {

  const handleDelete = async (id) => {
    await deleteTodo(id);
    if (onDelete) onDelete(id);
  };

  return (
    <li className="flex justify-between items-center shadow-lg bg-white p-4 rounded-md">
      {todo.completed ? (
        <div className="flex flex-row gap-2 items-center justify-center">
          <span className="block bg-green-500 rounded-full w-3 h-3 inset-shadow-2xs"></span>
          <p className="text-xs text-gray-600">Completed</p>
        </div>
      ) : (
        <div className="flex flex-row gap-2 items-center justify-center">
          <span className="block bg-red-500 rounded-full w-3 h-3 inset-shadow-2xs"></span>
          <p className="text-xs text-gray-600">In progress</p>
        </div>
      )}
      <h2>{todo.title}</h2>
      <button
        onClick={() => handleDelete(todo.id)}
        className="group bg-transparent cursor-pointer hover:bg-red-500 p-2 rounded-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=" w-5 h-5 group-hover:stroke-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fb2c36"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-label="Delete todo"
        >
          <path d="M3 6h18" />
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <path d="M10 11v6" />
          <path d="M14 11v6" />
        </svg>
      </button>
    </li>
  );
};

export default TodoItem;
