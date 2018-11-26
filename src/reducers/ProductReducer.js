import { actionTypes } from '../config/actionTypes';

const initialState = {
    products: [],
    filter: {
        name: '',
        categories: ''
    },
    shopping_cart: [],
};

export const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PRODUCTS:
            return { ...state, products: action.products }
        case actionTypes.SET_FILTER:
            return { ...state, filter: {...state.filter, ...action.filter} }
        case actionTypes.SET_SHOPPING_CART:
            return { ...state, shopping_cart: action.data }
        default:
            return state;
    }
}