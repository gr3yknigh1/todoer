import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  removeTodo,
  toggleTodo,
} from "../../todosSlice";

import TodoListItemContextProvider from "./TodoListItemContext";

import TodoListNameInput from "./TodoListNameInput";
import TodoListNameLabel from "./TodoListNameLabel";


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
    <TodoListItemContextProvider>
      <li
        className="todo-list-item"
      >
        <input
          className="todo-checkbox"
          type="checkbox"
          defaultChecked={ isDone }
          onClick={ toggleThisTodo }
          >
        </input>
        { todoNameContainer }
        <button className="todo-remove-button" onClick={ removeThisTodo }>x</button>
      </li>
    </TodoListItemContextProvider>
  );
}
