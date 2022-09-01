import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { setEditingTodo } from "../../todosSlice";

export default function TodoListNameLabel({ name, id }) {
  const dispatch = useDispatch();

  const editThisTodo = useCallback(() => {
    dispatch(setEditingTodo(id));
  }, [dispatch, id]);

  return (
    <span
      className="todo-name-container"
      onClick={ editThisTodo }
    >
      {name}
    </span>
  );
}
