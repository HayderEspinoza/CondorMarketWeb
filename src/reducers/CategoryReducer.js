import { actionTypes } from '../config/actionTypes';

const initialState = {
    categories: []
}

export const CategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_CATEGORIES:
            return { ...state, categories: action.categories }
        default:
            return state;
    }
}