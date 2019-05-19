import { UPDATE_FORM_FIELD, EMPTY_INPUT, ERROR_INPUT } from './actionTypes'

export const updateField = (str) => ({
    type: UPDATE_FORM_FIELD,
    payload: str
})

export const emptyInput = () => ({ type: EMPTY_INPUT })

export const errorInput = () => ({ type: ERROR_INPUT })