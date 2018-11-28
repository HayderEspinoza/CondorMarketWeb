import { actionTypes } from "../config/actionTypes";

export const getCategories = {
    type: actionTypes.GET_CATEGORIES
}

export const setCategories = (categories) => ({
    type: actionTypes.SET_CATEGORIES,
    categories
})

export const removeCategory = (category) => ({
    type: actionTypes.REMOVE_CATEGORY,
    category
})

export const addCategory = (data) => ({
    type: actionTypes.ADD_CATEGORY,
    data
})

export const setCategory = (category) => ({
    type: actionTypes.SET_CATEGORY,
    category
})

export const updateCategory = (category) => ({
    type: actionTypes.UPDATE_CATEGORY,
    category
})