import * as types from './types';

export const actionAddTodo = (item) => ({
    type: types.TODO_ADD,
    payload: item
});

export const actionDeleteTodo = (item) => ({
    type: types.TODO_DELETE,
    payload: item
});

export const actionEditTodo = (item) => ({
    type: types.TODO_EDIT,
    payload: item
});

export const actionSaveTodo = (item) => ({
    type: types.TODO_SAVE,
    payload: item
});