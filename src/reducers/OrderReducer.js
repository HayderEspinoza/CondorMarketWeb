import { actionTypes } from '../config/actionTypes';

const initialState = {
    order_created: false,
    orders: [],
}

export const OrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ERROR_ORDER:
            return { ...state, order_created: false }
        case actionTypes.SUCCESS_ORDER:
            return { ...state, order_created: true }
        case actionTypes.SET_ORDERS:
            return { ...state, orders: action.orders }
        default:
            return state;
    }
}