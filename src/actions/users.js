import { actionTypes } from "../config/actionTypes";

export const showLoginModal = {
    type: actionTypes.SHOW_LOGIN_MODAL
}

export const hideLoginModal = {
    type: actionTypes.HIDE_LOGIN_MODAL
}

export const login = (data) => ({
    type: actionTypes.LOGIN,
    data
})

export const setErrors = (errors) => ({
    type: actionTypes.SET_ERRORS,
    errors
})

export const setSession = (session) => ({
    type: actionTypes.SET_SESSION,
    session
})

export const getSession = {
    type: actionTypes.GET_SESSION,
}

export const removeSession = {
    type: actionTypes.REMOVE_SESSION,
}
