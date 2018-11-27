import { takeLatest, call, put, select } from "redux-saga/effects";
import { actionTypes } from '../../config/actionTypes';
import { showLoginModal } from './../../actions/users';
import OrderProvider from './../providers/OrderProvider';
import { errorOrder, successOrder } from './../../actions/orders';
import { getShoppingCart } from "../../actions/products";

function* sendOrderGenerator(action) {
    try {
        const session = yield select(state => state.UserReducer.session)
        if(session){
            let products = window.localStorage.getItem('shopping_cart')
            products = products ? JSON.parse(products): []
            if(products.length){
                const order = yield call(OrderProvider.sendOrder, { user: session.user, products })
                window.localStorage.removeItem('shopping_cart')
                yield put(getShoppingCart)
                yield put(successOrder)
            }
        }else{
            yield put(showLoginModal)
        }
    } catch (error) {
        yield put(errorOrder)
    }
}

export function* orderSaga() {
    yield takeLatest(actionTypes.SEND_ORDER, sendOrderGenerator)
}