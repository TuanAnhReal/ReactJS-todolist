import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        tasks: [],
        editItem: {},
    },
    reducers: {
        actionAddTodo: (state, action) => {
            var itemAdd = action.payload;
            var currentTaskAdd = [...state.tasks, itemAdd];
            return { ...state, tasks: currentTaskAdd };
        },
        actionDeleteTodo: (state, action) => {
            var itemDelId = action.payload;
            var currentTaskDel = state.tasks.filter((item) => item.id !== itemDelId);
            return { ...state, tasks: currentTaskDel };
        },
        actionEditTodo: (state, action) => {
            var itemEdit = action.payload;
            return { ...state, editItem: itemEdit };

        },
        actionSaveTodo: (state, action) => {
            var itemSavePayload = action.payload;
            var currentTaskSave = [...state.tasks];
            var itemIndex = currentTaskSave.findIndex((item) => item.id === itemSavePayload.id);
            currentTaskSave[itemIndex] = itemSavePayload;
            return { ...state, tasks: currentTaskSave, editItem: {} };
        },
        actionGetTodo: (state, action) => {
            var currentTasks = action.payload;
            return { ...state, tasks: currentTasks };
        }
    }
});
export const { actionAddTodo, actionDeleteTodo, actionEditTodo, actionSaveTodo, actionGetTodo } = todoSlice.actions;
export default todoSlice.reducer;