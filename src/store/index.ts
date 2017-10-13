import { routerReducer } from "react-router-redux";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import * as reducers from "../reducers";
import { IUser } from "../types/types";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
    applyMiddleware(logger, thunk),
);

const reducer = combineReducers({
    ...reducers,
    routing: routerReducer,
});

const store = createStore(reducer, enhancer);

export default store;
