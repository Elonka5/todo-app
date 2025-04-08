import { getTodos } from "@/services/api";
import Title from "@/components/Title";
import TodoList from "@/components/TodoList";

export default async function Home() {
  const todos = await getTodos();

  return (
    <main>
      <div className="flex flex-col gap-8 px-14 py-16 ">
        <Title />
        <TodoList initTodos={todos} />
      </div>
    </main>
  );
}
