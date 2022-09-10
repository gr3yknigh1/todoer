import { useCallback, useContext, useState } from "react";
import { useDispatch } from "react-redux";

import { setTodoName, setEditingTodo} from "../../todosSlice";


export default function TodoListNameInput({ name, id}) {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(name);


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
      className="todo-name-container"
      onSubmit={onInputSubmit}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          dispatch(setEditingTodo(null));
        }
      }}
    >
      <input
        value={inputValue}
        type="text"
        onChange={onInputChange}
      >
      </input>
    </form>
  )
}
