import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import loggedReducer from "./loggedReducer";

const reducers = combineReducers({
  counter: counterReducer,
  loggen: loggedReducer,
})

export default reducers