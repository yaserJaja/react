import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { bankReducer } from "../reducers/bank-reducer";
import { productsReducer } from "../reducers/products-reducers";

const appReducer = combineReducers({
  bank: bankReducer,
  products: productsReducer
})

export const store = createStore(appReducer, applyMiddleware(thunk));