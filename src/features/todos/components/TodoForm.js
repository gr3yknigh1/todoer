import { useState } from "react"
import { useDispatch } from "react-redux";
import createTodo from "../createTodo";

import { pushTodo } from "../todosSlice";


export default function TodoForm() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const onInputSubmit = (event) => {
    event.preventDefault();
    if (name === "") {
      return;
    }
    dispatch(pushTodo(
      createTodo(name, false)
    ));
    setName("");
  };

  //TODO(gr3yknigh1): Switch to `onBlur`
  const onInputChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  return (
    <form className="app__form">
      <input
        className="from__input"
        type="text"
        onSubmit={ onInputSubmit }
        onChange={ onInputChange }
        value={ name }>
      </input>
      <button
        className="from__button"
        onClick={ onInputSubmit }
      >
        Add task
      </button>
    </form>
  )
}
