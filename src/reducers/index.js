import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { CategoryReducer } from './CategoryReducer';
import { ProductReducer } from './ProductReducer';

const reducers = combineReducers({
    form,
    CategoryReducer,
    ProductReducer,
});

export default reducers;