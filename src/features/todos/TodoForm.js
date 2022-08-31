import { useCallback } from "react"
import { useDispatch } from "react-redux";
import createTodo from "./createTodo";

import { pushTodo } from "./todosSlice";


export default function TodoForm() {
  const dispatch = useDispatch();

  const onSubmit = useCallback((event) => {
    event.preventDefault();
    dispatch(pushTodo(
      createTodo("foo", false)
    ));
  }, [dispatch]);

  return (
    <form>
      <input type="text" onSubmit={ onSubmit }></input>
      <button onClick={ onSubmit }>Add task</button>
    </form>
  )
}
