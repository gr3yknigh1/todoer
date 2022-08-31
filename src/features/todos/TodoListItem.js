import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  removeTodo,
  toggleTodo,
  setEditingTodo,
  setTodoName
} from "./todosSlice";


function TodoListNameInput({ name, id }) {
  const dispatch = useDispatch();
  const [ inputValue, setInputValue ] = useState(name);

  const onInputSubmit = useCallback((event) => {
    event.preventDefault();
    dispatch(setTodoName({
      id: id,
      newName: inputValue
    }));
    dispatch(setEditingTodo(null));
  }, [inputValue, id, dispatch])

  const onInputChange = useCallback((event) => {
    setInputValue(event.target.value);
  }, [setInputValue]);

  return (
    <form
      onSubmit={ onInputSubmit }
    >
      <input
        className="todo-name"
        value={ inputValue }
        type="text"
        onChange={ onInputChange }
        >
      </input>
    </form>
  )
}

export default function TodoListItem({ id, index, name, isDone }) {
  const dispatch = useDispatch();
  const editingTodo = useSelector(state => state.todos.editingTodo);
  const isEditing = editingTodo ? editingTodo.id === id : false;

  const onMenuButtonClick = useCallback(() => {
    dispatch(removeTodo(id));
  }, [dispatch, id]);

  const onCheckboxClick = useCallback(() => {
    dispatch(toggleTodo(id));
  }, [dispatch, id]);

  const onTodoItemClick = useCallback(() => {
    dispatch(setEditingTodo(id));
  }, [dispatch, id]);


  let todoName = null;
  if (isEditing) {
    todoName = <TodoListNameInput name={ name } id={ id } />
  }
  else {
    todoName = (
      <span
        className="todo-name"
      >
        { name }
      </span>
    );
  }

  return (
    <li
      className="todo-list-item"
      onClick={ onTodoItemClick }
    >
      <input
        className="todo-checkbox"
        type="checkbox"
        defaultChecked={ isDone }
        onClick={ onCheckboxClick }
        >
      </input>
      { todoName }
      <button className="todo-remove-button" onClick={ onMenuButtonClick }>x</button>
    </li>
  );
}
