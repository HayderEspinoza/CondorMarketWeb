import { takeLatest, call, put, select } from "redux-saga/effects";
import { actionTypes } from '../../config/actionTypes';
import CategoryProvider from './../providers/CategoryProvider';
import { setCategories } from "../../actions/categories";
import { getProducts, setFilter } from "../../actions/products";

function* getCategoriesGenerator(action) {
    try {
        const categories = yield call(CategoryProvider.getCategories)
        yield put(setCategories(categories.data))
    } catch (error) {
        console.log('error', error);
    }
}

function* setCategoryFilterGenerator(action) {
    try {
        let categories = yield select(state => state.CategoryReducer.categories)
        let filter = ''
        categories = categories.map(category => {
            if(category._id === action.category._id)
                category = { ...category, checked: !category.checked }
            if (category.checked)
                filter += `category=${category._id}&`
            return category
        })
        yield put(setCategories(categories))
        yield put(setFilter({ categories: filter }))
        yield put(getProducts)
    } catch (error) {
        console.log('error', error);
    }
}

export function* categorySaga() {
    yield takeLatest(actionTypes.GET_CATEGORIES, getCategoriesGenerator)
    yield takeLatest(actionTypes.SET_CATEGORY_FILTER, setCategoryFilterGenerator)
}