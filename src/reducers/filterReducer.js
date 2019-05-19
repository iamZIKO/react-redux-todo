import filterState from '../store/filterState'
import { SET_FILTER_STATE } from '../actions/actionTypes'

const filterReducer = (state = filterState, action) => {
    switch (action.type) {
        case SET_FILTER_STATE:
            const all = action.payload === 'all' ? true : false
            const completed = action.payload === 'completed' ? true : false
            const stillTodo = action.payload === 'todo' ? true : false
            return {
                all,
                completed,
                stillTodo
            }
        default:
            return state
    }
}
export default filterReducer