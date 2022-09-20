import { useState } from "react"
import { useDispatch } from "react-redux";
import createTodo from "../createTodo";

import { pushTodo } from "../todosSlice";


export default function TodoForm() {
  const [inputName, setInputName] = useState("");
  const dispatch = useDispatch();

  const onInputSubmit = (event) => {
    event.preventDefault();
    if (inputName === "") {
      return;
    }
    dispatch(pushTodo(
      createTodo(inputName, false)
    ));
    setInputName("");
  };

  //TODO(gr3yknigh1): Switch to `onBlur`
  const onInputChange = (event) => {
    event.preventDefault();
    setInputName(event.target.value);
  };

  return (
    <form className="app__form">
      <input
        className="form__input"
        type="text"
        onSubmit={ onInputSubmit }
        onChange={ onInputChange }
        value={ inputName }
        >
      </input>
      <button
        className="form__button"
        onClick={ onInputSubmit }
        disabled={ !inputName }
      >
        Add task
      </button>
    </form>
  )
}
