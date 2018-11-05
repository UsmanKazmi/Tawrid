import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import OrderReducer from './Reducer/Order';
import ProductReducer from './Reducer/Product';

const allReducers = combineReducers({
    OrderReducer,
    ProductReducer
})

const store = createStore(allReducers, applyMiddleware(thunk));
export default store ;
