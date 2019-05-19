import todoState from '../store/todoState'
import { ADD_TODO, REMOVE_TODO, CHECK_TODO } from '../actions/actionTypes'
import store from '../store/store'
import uuidv1 from 'uuid/v1';
import { emptyInput, errorInput } from '../actions/formAction'


const todoReducer = (state = todoState, action) => {
    switch (action.type) {
        case ADD_TODO:
            if (store.getState().form.input) {
                store.dispatch(emptyInput())
            } else {
                store.dispatch(errorInput)
            }
            return [...state, {
                id: uuidv1(),
                todo: store.getState().form.input,
                completed: false
            }]
        case REMOVE_TODO:
            return state.filter(el => el.id !== action.payload)
        case CHECK_TODO:
            // eslint-disable-next-line array-callback-return
            const checkedElement = state.filter(el => {
                if (el.id === action.payload) {
                    return el.completed = !el.completed
                }
            })
            const finalizedArr = state.filter(el => el.id !== checkedElement.id)
            return finalizedArr
        default:
            return state
    }
}
export default todoReducer