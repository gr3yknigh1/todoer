import { useState } from "react"
import { useDispatch } from "react-redux";
import createTodo from "./createTodo";

import { pushTodo } from "./todosSlice";


export default function TodoForm() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const onInputSubmit = (event) => {
    event.preventDefault();
    dispatch(pushTodo(
      createTodo(name, false)
    ));
    setName("");
  };

  const onInputChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  return (
    <form>
      <input
        type="text"
        onSubmit={ onInputSubmit }
        onChange={ onInputChange }
        value={ name }>
      </input>
      <button onClick={ onInputSubmit }>Add task</button>
    </form>
  )
}
