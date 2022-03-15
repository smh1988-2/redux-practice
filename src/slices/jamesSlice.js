import { createSlice } from "@reduxjs/toolkit";

export const jamesSlice = createSlice({
  name: "james",
  initialState: [{ name: "object 1", id: 1 }],
  reducers: {
      addToJames: (state, action) => state = [...state, action.payload]
},
})

export const { addToJames } = jamesSlice.actions;

export default jamesSlice.reducer;
