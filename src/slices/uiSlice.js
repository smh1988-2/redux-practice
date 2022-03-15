import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    value: {
      loading: true,
    },
  },
  reducers: {
    setLoading: (state) => {
      state.value = { ...state.value, loading: false };
    },
  },
});

export const { setLoading } = uiSlice.actions;

export default uiSlice.reducer;
