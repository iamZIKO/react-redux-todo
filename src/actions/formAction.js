import { UPDATE_FORM_FIELD } from './actionTypes'

export const updateField = (str) => ({
    type: UPDATE_FORM_FIELD,
    payload: str
})

