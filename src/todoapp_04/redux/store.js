import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todoSlice";
import alertReducer from "./reducers/alertSlice";

const store = configureStore({
    reducer: {
        todoState: todoReducer,
        alertState: alertReducer,
    }
});

export default store;