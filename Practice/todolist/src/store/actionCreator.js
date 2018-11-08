import {
    CHANGE_INPUT_VALUE,
    ADD_TODO_ITEM,
    DELETE_TODO_ITEM,
    INIT_LIST_ACTION,
    GET_TODO_ITEM
} from './actionTypes';

export const getChangeInputValue = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})
export const addTodoItem = () => ({
    type: ADD_TODO_ITEM,
    value: ''
})
export const deleteTodoItem = (index) => ({
    type: DELETE_TODO_ITEM,
    index
}) 
export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})
export const getTodoItem = () => ({
    type: GET_TODO_ITEM
})