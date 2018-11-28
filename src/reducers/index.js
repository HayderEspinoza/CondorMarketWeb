import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { CategoryReducer } from './CategoryReducer';
import { ProductReducer } from './ProductReducer';
import { UserReducer } from './UserReducer';
import { OrderReducer } from './OrderReducer';

const reducers = combineReducers({
    form,
    CategoryReducer,
    UserReducer,
    OrderReducer,
    ProductReducer,
});

export default reducers;