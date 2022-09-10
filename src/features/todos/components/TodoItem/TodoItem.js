import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import classNames from "classnames";

import {
  removeTodo,
  toggleTodo,
} from "../../todosSlice";

import TodoListNameInput from "./TodoNameInput";
import TodoListNameLabel from "./TodoNameLabel";


function CheckboxIcon() {
  return (
    <svg className="checkbox__icon" width="180" height="135" viewBox="0 0 180 135" fill="none">
      <g id="checkbox">
      <line id="Line 1" x1="2.00316" y1="79.3963" x2="70.167" y2="132.412" stroke="currentColor" stroke-width="20"/>
      <line id="Line 2" x1="177.234" y1="1.8037" x2="66.9762" y2="133.101" stroke="currentColor" stroke-width="20"/>
      </g>
    </svg>
  );
}


export default function TodoListItem({ id, index, name, isDone }) {
  const dispatch = useDispatch();
  const editingTodo = useSelector(state => state.todos.editingTodo);

  const isEditing = editingTodo ? editingTodo.id === id : false;

  const removeThisTodo = useCallback(() => {
    dispatch(removeTodo(id));
  }, [dispatch, id]);

  const toggleThisTodo = useCallback(() => {
    dispatch(toggleTodo(id));
  }, [dispatch, id]);


  const todoNameContainer = isEditing ?
    <TodoListNameInput name={ name } id={ id } /> :
    <TodoListNameLabel name={ name } id={ id } />;

  return (
    <li
      className={ classNames("todo", { "todo--done": isDone }) }
    >
      <label className="todo__checkbox" htmlFor={ id }>
        <input
          id={ id }
          type="checkbox"
          checked={ isDone }
          onClick={ toggleThisTodo }
          >
        </input>
        { isDone ? <CheckboxIcon/> : <div></div> }
      </label>
      { todoNameContainer }
      <button className="todo__remove-button" onClick={ removeThisTodo }>x</button>
    </li>
  );
}
