import { createSlice } from "@reduxjs/toolkit";

export const greetingSlice = createSlice({
    name: "greeting",
    initialState: {
        value: ["inital value"]
    },
    reducers: {
        hello: state => { state.value = [...state.value, "Hello"]},
        goodbye: state => { state.value = [...state.value, "Bye bye!"]}
    }
})

export const { hello, goodbye } = greetingSlice.actions

export default greetingSlice.reducer