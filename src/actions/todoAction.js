import { ADD_TODO, REMOVE_TODO, CHECK_TODO } from './actionTypes'

export const addTodo = () => ({ type: ADD_TODO })

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payload: id
})

export const checkTodo = (id) => ({
    type: CHECK_TODO,
    payload: id
})