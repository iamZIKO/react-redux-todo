import formState from '../store/formState'
import { UPDATE_FORM_FIELD } from '../actions/actionTypes'

const formReducer = (state = formState, action) => {
    switch (action.type) {
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
