import { SET_FILTER_STATE } from './actionTypes'

export const filter = (str) => ({
    type: SET_FILTER_STATE,
    payload: str
}) 