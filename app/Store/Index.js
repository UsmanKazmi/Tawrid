import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import OrderReducer from './Reducer/Order';

const allReducers = combineReducers({
    OrderReducer
})

const store = createStore(allReducers, applyMiddleware(thunk));
export default store ;
