import { createSlice } from "@reduxjs/toolkit";

const SUCCESS_MESSAGES = {
    'ADD': 'Thêm công việc thành công.',
    'SAVE': 'Sửa công việc thành công.',
    'DELETE': 'Xóa công việc thành công.',
};

const alertSlice = createSlice({
    name: 'alert',
    initialState: {
        modal: {
            show: false,
            title: '',
            message: '',
            task: null,
            actionType: null,
        },
        notification: {
            show: false,
            message: '',
        },
    },
    reducers: {
        actionOpenModal: (state, action) => {
            state.modal = { ...action.payload, show: true };
        },
        actionCloseModal: (state) => {
            state.modal = { show: false, title: '', message: '', task: null, actionType: null };
        },

        actionShowNotification: (state, action) => {
            const message = SUCCESS_MESSAGES[action.payload]; // Lấy thông điệp tương ứng: 'ADD', 'SAVE', 'DELETE'
            state.notification = { 
                show: true, 
                message: message 
            };
        },
        actionCloseNotification: (state) => {
            state.notification = { show: false, message: '' };
        }
    }
});

export const {
    actionOpenModal, 
    actionCloseModal,
    actionShowNotification, 
    actionCloseNotification
} = alertSlice.actions;
export default alertSlice.reducer;