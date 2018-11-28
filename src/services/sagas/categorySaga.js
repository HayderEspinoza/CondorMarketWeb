import { takeLatest, call, put, select } from "redux-saga/effects";
import { actionTypes } from '../../config/actionTypes';
import CategoryProvider from './../providers/CategoryProvider';
import { setCategories, setCategory } from "../../actions/categories";
import { getProducts, setFilter } from "../../actions/products";
import { getCategories } from './../../actions/categories';
import { reset, stopSubmit, startSubmit, initialize } from 'redux-form';
import { getErrorsFormat } from "../../config/helpers";

function* getCategoriesGenerator(action) {
    try {
        const categories = yield call(CategoryProvider.getCategories)
        yield put(initialize('CategoryForm', null))
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

function* removeCategoryGenerator(action) {
    try {
        yield call(CategoryProvider.removeCategory, action.category)        
        yield put(getCategories)
    } catch (error) {
        console.log('error', error);
    }
}

function* addCategoryGenerator(action) {
    try {
        yield call(CategoryProvider.postCategory, action.data)
        yield put(reset('CategoryForm'))
        yield put(getCategories)
    } catch (error) {
        if (error.response.status === 409) {
            let errors = yield call(getErrorsFormat, error.response.data.errors)
            yield put(stopSubmit('CategoryForm', errors))
        }
    }
}

function* updateCategoryGenerator(action) {
    try {
        yield call(CategoryProvider.putCategory, action.category._id, action.category)
        yield put(getCategories)
    } catch (error) {
        console.log('error', error);
    }
}

export function* categorySaga() {
    yield takeLatest(actionTypes.GET_CATEGORIES, getCategoriesGenerator)
    yield takeLatest(actionTypes.SET_CATEGORY_FILTER, setCategoryFilterGenerator)
    yield takeLatest(actionTypes.REMOVE_CATEGORY, removeCategoryGenerator)
    yield takeLatest(actionTypes.ADD_CATEGORY, addCategoryGenerator)
    yield takeLatest(actionTypes.UPDATE_CATEGORY, updateCategoryGenerator)
}