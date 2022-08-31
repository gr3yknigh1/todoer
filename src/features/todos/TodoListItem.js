import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { removeTodo, toggleTodo } from "./todosSlice";

export default function TodoListItem({ id, index, name, isDone }) {
  const dispatch = useDispatch();

  const onCloseButtonClick = useCallback(() => {
    dispatch(removeTodo(id));
  }, [dispatch, id]);

  const onCheckboxClick = useCallback(() => {
    dispatch(toggleTodo(id));
  }, [dispatch, id]);

  return (
    <li>
      <button onClick={ onCloseButtonClick }>x</button>
      <input type="checkbox" defaultChecked={ isDone } onClick={ onCheckboxClick }></input>
      <span> { name } </span>
    </li>
  );
}
