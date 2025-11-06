import * as Type from '../types';

const initialState = {
    tasks: [
        { id: 1, name: 'Quét nhà' },
        { id: 2, name: 'Giặt đồ' },
        { id: 3, name: 'Làm bài tập' },
        { id: 4, name: 'Đi chợ Redux' },
    ],
    editItem: {},
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.TODO_ADD:
            var itemAdd = action.payload;
            var currentTaskAdd = [...state.tasks, itemAdd];
            return { ...state, tasks: currentTaskAdd };

        case Type.TODO_DELETE:
            var itemDelId = action.payload;
            var currentTaskDel = state.tasks.filter((item) => item.id !== itemDelId);
            return { ...state, tasks: currentTaskDel };

        case Type.TODO_EDIT:
            var itemEdit = action.payload;
            return { ...state, editItem: itemEdit };

        case Type.TODO_SAVE:
            var itemSavePayload = action.payload;
            var currentTaskSave = [...state.tasks];
            var itemIndex = currentTaskSave.findIndex((item) => item.id === itemSavePayload.id);
            currentTaskSave[itemIndex] = itemSavePayload;
            return { ...state, tasks: currentTaskSave, editItem: {} };

        default:
            return state;
    }
}

export default todoReducer;