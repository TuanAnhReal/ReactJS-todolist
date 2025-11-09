import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todoSlice";

const store = configureStore({
    reducer: {
        todoState: todoReducer,
    }
});

export default store;