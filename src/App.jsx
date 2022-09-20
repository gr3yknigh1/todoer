import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


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
