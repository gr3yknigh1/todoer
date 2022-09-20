import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { setTodoName, setEditingTodo} from "../../todosSlice";


export default function TodoListNameInput({ name, id}) {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(name);

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current?.focus();
  }, [])

  const onInputBlur = useCallback(() => {
    dispatch(setEditingTodo(null));
  }, [dispatch]);

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
      className="todo__name-container todo__name-container--editing"
      onSubmit={onInputSubmit}
    >
      <input
        ref={inputRef}
        value={inputValue}
        type="text"
        onChange={onInputChange}
        onBlur={onInputBlur}
      >
      </input>
    </form>
  )
}
