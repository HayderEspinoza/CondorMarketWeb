import { takeLatest, call, put, select } from "redux-saga/effects";
import { actionTypes } from '../../config/actionTypes';
import UserProvider from './../providers/UserProvider';
import { setSession, setErrors, hideLoginModal } from "../../actions/users";
import { startSubmit, stopSubmit } from 'redux-form'
import { getErrorsFormat } from "../../config/helpers";

function* loginGenerator(action) {
    try {
        const session = yield call(UserProvider.login, action.data)
        window.localStorage.setItem('session', JSON.stringify(session))
        yield put(setSession(session))
        yield put(hideLoginModal)
    } catch (error) {
        // yield put(setErrors(error))
        if (error.response.status === 409){
            const errors = yield call(getErrorsFormat, error.response.data.errors)
            yield put(stopSubmit('LoginForm', errors))
        }
    }
}

function* getSessionGenerator(action) {
    try {
        let session = window.localStorage.getItem('session')
        session = session ? JSON.parse(session) : null
        yield put(setSession(session))
    } catch (error) {
        yield put(setErrors(error))
    }
}

function* removeSessionGenerator(action) {
    try {
        window.localStorage.removeItem('session')
        yield put(setSession(null))
    } catch (error) {
        yield put(setErrors(error))
    }
}

export function* userSaga() {
    yield takeLatest(actionTypes.LOGIN, loginGenerator)
    yield takeLatest(actionTypes.GET_SESSION, getSessionGenerator)
    yield takeLatest(actionTypes.REMOVE_SESSION, removeSessionGenerator)
}