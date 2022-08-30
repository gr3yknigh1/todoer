import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: "todos",
    initialState: {
        items: []
    },
    reducers: {
        pushTodo: (state, payload) => {},
        removeTodo: (state, payload) => {}
    }
});


export const { pushTodo, removeTodo } = todosSlice.actions;

export const todosReducer = todosSlice.reducer;
export default todosSlice;
