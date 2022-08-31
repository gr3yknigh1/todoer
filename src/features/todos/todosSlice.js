import { createSlice } from "@reduxjs/toolkit";
import createTodo from "./createTodo";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    editingTodo: null,
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
    },
    setEditingTodo: (state, action) => {
      if (!action.payload) {
        state.editingTodo = null;
        return;
      }

      state.editingTodo = state.items.find(
        value => value.id === action.payload
      );
    },
    setTodoName: (state, action) => {
      const { id, newName } = action.payload;
      console.log(action.payload)

      let todoIndex = null;
      for (let index = 0; index < state.items.length; index++) {
        const todo = state.items[index];

        if (todo.id === id) {
          todoIndex = index;
          break;
        }
      }

      state.items[todoIndex].name = newName;
    }
  }
});

export const {
  pushTodo,
  removeTodo,
  toggleTodo,
  setEditingTodo,
  setTodoName
} = todosSlice.actions;

export const todosReducer = todosSlice.reducer;
export default todosSlice;
