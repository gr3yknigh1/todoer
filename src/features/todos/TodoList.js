
import { useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";

export default function TodoList() {
  const todoItems = useSelector(state => state.todos.items);
  const elements = todoItems.map((todo, index) => {
    return <TodoListItem
      name={ todo.name }
      key={ todo.id }
      id = { todo.id }
      isDone={ todo.isDone }
      index={ index }
    />;
  });

  return (
    <ul className="todo-list">
      { elements }
    </ul>
  );
}
