import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import OrderReducer from './Reducer/Order';
import ProductReducer from './Reducer/Product';
import StatementReducer from './Reducer/Statement';
import TokenReducer from './Reducer/Token';
import SearchReducer from './Reducer/Token';

const allReducers = combineReducers({
    OrderReducer,
    ProductReducer,
    StatementReducer,
    TokenReducer,
    SearchReducer
})

const store = createStore(allReducers, applyMiddleware(thunk));
export default store ;
