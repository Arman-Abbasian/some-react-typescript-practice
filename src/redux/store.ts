import rootReducer from "./rootReducers";
import {createStore , applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";

const store=createStore(rootReducer);
export default store;