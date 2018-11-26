import { actionTypes } from "../config/actionTypes";

export const getProducts = {
    type: actionTypes.GET_PRODUCTS
}

export const setProducts = (products) => ({
    type: actionTypes.SET_PRODUCTS,
    products
})

export const addProduct = (data) => ({
    type: actionTypes.ADD_PRODUCT,
    data
})

export const setCategoryFilter = (category) => ({
    type: actionTypes.SET_CATEGORY_FILTER,
    category
})

export const searchProduct = (name) => ({
    type: actionTypes.SEARCH_PRODUCT,
    name
})

export const setFilter = (filter) => ({
    type: actionTypes.SET_FILTER,
    filter
})

export const setShoppingCart = (data) => ({
    type: actionTypes.SET_SHOPPING_CART,
    data
})

export const getShoppingCart = {
    type: actionTypes.GET_SHOPPING_CART
}

export const getProduct = (id) => ({
    type: actionTypes.GET_PRODUCT,
    id
})

export const setProduct = (product) => ({
    type: actionTypes.SET_PRODUCT,
    product
})

export const removeProduct = (data) => ({
    type: actionTypes.REMOVE_PRODUCT,
    data
})