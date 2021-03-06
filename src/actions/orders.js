import { actionTypes } from "../config/actionTypes";

export const sendOrder = {
    type: actionTypes.SEND_ORDER
}

export const successOrder = {
    type: actionTypes.SUCCESS_ORDER
}

export const errorOrder = {
    type: actionTypes.ERROR_ORDER,
}

export const getOrders = {
    type: actionTypes.GET_ORDERS
}

export const setOrders = orders => ({
    type: actionTypes.SET_ORDERS,
    orders
})
