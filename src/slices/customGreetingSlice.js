import { createSlice } from "@reduxjs/toolkit";

export const customGreetingSlice = createSlice({
    name: "customGreeting",
    initialState: {
        value: ["second inital value"]
    },
    reducers: {
        message: (state, action) => { state.value = [...state.value, action.payload] },
    }
})

export const { message } = customGreetingSlice.actions

export default customGreetingSlice.reducer