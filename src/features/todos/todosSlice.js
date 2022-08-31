import { createSlice } from "@reduxjs/toolkit";
import createTodo from "./createTodo";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [
      createTodo("Wash dishes", false),
      createTodo("Make dinner", false),
      createTodo("Make blowjob", true)
    ]
  },
  reducers: {
    pushTodo: (state, action) => {
      state.items.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.items = state.items.filter(
        todo => todo.id !== action.payload
      );
    },
    toggleTodo: (state, action) => {
      const targetTodo = state.items.find(
        todo =>  todo.id === action.payload
      );
      targetTodo.isDone = !targetTodo.isDone;
    }
  }
});

export const { pushTodo, removeTodo, toggleTodo } = todosSlice.actions;

export const todosReducer = todosSlice.reducer;
export default todosSlice;
