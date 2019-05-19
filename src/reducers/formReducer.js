import formState from '../store/formState'
import { UPDATE_FORM_FIELD, EMPTY_INPUT, ERROR_INPUT } from '../actions/actionTypes'

const formReducer = (state = formState, action) => {
    switch (action.type) {
        case EMPTY_INPUT:
            return {
                input: "",
                error: false
            }

        case ERROR_INPUT:
            return {
                input: "",
                error: true
            }
        case UPDATE_FORM_FIELD:
            return {
                ...state,
                input: action.payload
            }
        default:
            return state
    }
}

export default formReducer
