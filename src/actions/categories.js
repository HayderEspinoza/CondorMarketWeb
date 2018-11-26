import { actionTypes } from "../config/actionTypes";

export const getCategories = {
    type: actionTypes.GET_CATEGORIES
}

export const setCategories = (categories) => ({
    type: actionTypes.SET_CATEGORIES,
    categories
})