import { createContext } from "react";
import { useSelector } from "react-redux";

export const TodoListItemContext = createContext();

export default function TodoListItemContextProvider({ children, id }) {
  const todos = useSelector(state => state.todos.items);
  const todo = todos.find(todo => todo.id === id);

  return (
    <TodoListItemContext.Provider value={ todo }>
      { children }
    </TodoListItemContext.Provider>
  )
}
