import { createSlice } from "@reduxjs/toolkit";

function saveObjectToLocalStorage(name, object) {
  localStorage.setItem(name, JSON.stringify(object));
}

function loadObjectFromLocalStorage(name) {
  return JSON.parse(localStorage.getItem(name));
}

function loadItemsFromDatabase() {
  // NOTE(gr3yknigh1): Mock data
  const items = loadObjectFromLocalStorage("items");
  return items ? items : []
}


const todosSlice = createSlice({
  name: "todos",
  initialState: {
    editingTodo: null,
    items: [
      ...loadItemsFromDatabase()
    ]
  },
  reducers: {
    pushTodo: (state, action) => {
      state.items.push(action.payload);
      saveObjectToLocalStorage("items", state.items);
    },
    removeTodo: (state, action) => {
      state.items = state.items.filter(
        todo => todo.id !== action.payload
      );
      saveObjectToLocalStorage("items", state.items);
    },
    toggleTodo: (state, action) => {
      const targetTodo = state.items.find(
        todo =>  todo.id === action.payload
      );
      targetTodo.isDone = !targetTodo.isDone;
      saveObjectToLocalStorage("items", state.items);
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

      let todoIndex = null;
      for (let index = 0; index < state.items.length; index++) {
        const todo = state.items[index];

        if (todo.id === id) {
          todoIndex = index;
          break;
        }
      }

      state.items[todoIndex].name = newName;
      saveObjectToLocalStorage("items", state.items);
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
