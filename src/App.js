import { TodoForm, TodoList } from "./features/todos";

export default function App() {
  return (
    <main id="app">
      <h1>todoer</h1>
      <TodoForm />
      <TodoList />
    </main>
  );
}
