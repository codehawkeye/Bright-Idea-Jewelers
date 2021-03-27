import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { productListReducer } from './reducers/productReducers';
import thunk from 'redux-thunk';

const initialState = {};
const reducer = combineReducers({
    productList: productListReducer,

})
const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
// middleware "thunk" delay the dispatch of an action, or to dispatch only if a certain conditions is met.
const store = createStore(reducer, initialState,composeEnhancer(applyMiddleware(thunk)));

export default store;