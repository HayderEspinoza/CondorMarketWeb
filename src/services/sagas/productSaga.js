import { takeLatest, call, put, select } from "redux-saga/effects";
import { actionTypes } from '../../config/actionTypes';
import ProductProvider from './../providers/ProductProvider';
import { setProducts, getProducts, setFilter, setShoppingCart, setProduct } from "../../actions/products";

function* getProductsGenerator(action) {
    try {
        const filter = yield select(state => state.ProductReducer.filter)
        const products = yield call(ProductProvider.getProducts, `${filter.categories}${filter.name}`)
        yield put(setProducts(products.data))
    } catch (error) {
        console.log('error', error);
    }
}

function* addProductGenerator(action) {
    try {
        const { data } = action
        let shopping_cart = yield window.localStorage.getItem('shopping_cart')
        if (shopping_cart) {
            let counter = 0
            shopping_cart = JSON.parse(shopping_cart).map(item => {
                if (item.product === data.product) {
                    counter++
                    console.log(data.data);
                    return { ...item, quantity: item.quantity + data.quantity, data: data.data }
                }
                return item
            })
            if(!counter) shopping_cart.push(data)
            yield put(setShoppingCart(shopping_cart))
            localStorage.setItem('shopping_cart', JSON.stringify(shopping_cart))
        } else {
            yield put(setShoppingCart([data]))
            window.localStorage.setItem('shopping_cart', JSON.stringify([data]))
        }
    } catch (error) {
        console.log('error', error);
    }
}

function* removeProductGenerator(action) {
    try {
        const { data } = action
        let shopping_cart = yield window.localStorage.getItem('shopping_cart')
        if (shopping_cart) {
            shopping_cart = JSON.parse(shopping_cart).filter(item => item.product !== data._id)
            yield put(setShoppingCart(shopping_cart))
            localStorage.setItem('shopping_cart', JSON.stringify(shopping_cart))
        }
    } catch (error) {
        console.log('error', error);
    }
}

function* searchProductGenerator(action) {
    try {
        yield put(setFilter({ name: `name=${action.name}` }))
        yield put(getProducts)
    } catch (error) {
        console.log('error', error);
    }
}

function* getShoppingCartGenerator(action) {
    try {
        let data = window.localStorage.getItem('shopping_cart')
        yield put(setShoppingCart(data ? JSON.parse(data) : []))
    } catch (error) {
        console.log('error', error);
    }
}

function* getProductGenerator(action) {
    try {
        const product = yield call(ProductProvider.getProduct, action.id)
        yield put(setProduct(product))
    } catch (error) {
        console.log('error', error);
    }
}

export function* productSaga() {
    yield takeLatest(actionTypes.GET_PRODUCTS, getProductsGenerator)
    yield takeLatest(actionTypes.ADD_PRODUCT, addProductGenerator)
    yield takeLatest(actionTypes.SEARCH_PRODUCT, searchProductGenerator)
    yield takeLatest(actionTypes.GET_SHOPPING_CART, getShoppingCartGenerator)
    yield takeLatest(actionTypes.GET_PRODUCT, getProductGenerator)
    yield takeLatest(actionTypes.REMOVE_PRODUCT, removeProductGenerator)
}