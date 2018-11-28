import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from "../services/sagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const composeEnhancers = compose;

export const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)));
// then run the saga
sagaMiddleware.run(rootSaga);