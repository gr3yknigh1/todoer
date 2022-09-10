import { TodoForm, TodoList } from "./features/todos";

export default function App() {
  return (
    <div className="app">
      <header>
        <h1 className="app__header">todoer</h1>
      </header>
      <main className="app__content">
        <TodoForm />
        <TodoList />
      </main>
      <footer className="app__footer">
      </footer>
    </div>
  );
}
