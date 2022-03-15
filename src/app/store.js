import { configureStore } from "@reduxjs/toolkit";
import greetingReducer from "../slices/greetingsSlice"
import customGreetingReducer from "../slices/customGreetingSlice"
import uiReducer from "../slices/uiSlice";
import userReducer from "../slices/userSlice";
import todoReducer from "../slices/todoSlice";
import jamesReducer from "../slices/jamesSlice";

export default configureStore({
    reducer: {
        greeting: greetingReducer,
        message: customGreetingReducer,
        ui: uiReducer,
        login: userReducer,
        todo: todoReducer,
        james: jamesReducer,
    }
})