import { applyMiddleware, combineReducers, createStore } from "redux";
import AuthReducer from "./reducers/AuthReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  auth: AuthReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
