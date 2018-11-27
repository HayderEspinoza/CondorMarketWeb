import { all } from 'redux-saga/effects';
import { productSaga } from './productSaga';
import { categorySaga } from './categorySaga';
import { orderSaga } from './orderSaga';
import { userSaga } from './userSaga';

export default function* rootSaga() {
    yield all([
        productSaga(),
        categorySaga(),
        orderSaga(),
        userSaga(),
        // add other watchers to the array
    ]);
}