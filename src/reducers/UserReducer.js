import { actionTypes } from '../config/actionTypes';

const initialState = {
    loginModal: false
};

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_SESSION:
            return { ...state, session: action.session }
        case actionTypes.SHOW_LOGIN_MODAL:
            return { ...state, loginModal: true }
        case actionTypes.HIDE_LOGIN_MODAL:
            return { ...state, loginModal: false }
        case actionTypes.SET_ERRORS:
            return { ...state, errors: action.errors }
        default:
            return state;
    }
}