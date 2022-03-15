import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: ["change cat litter"],
  reducers: {
    addToList: (state, action) => (state = [...state, action.payload]),
    deleteTodo: (state, action) => 
      state = [
        ...state.slice(0, action.payload), //action.payload = number
        ...state.slice(action.payload + 1),
      ]
  },
});

export const { addToList, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
