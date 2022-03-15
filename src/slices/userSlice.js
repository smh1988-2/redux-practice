import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      user: {
        username: null,
        password: null,
      },
    },
  },
  reducers: {
    login: (state, action) => {
      state.value = { ...state.value, user: action.payload };
    },
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
