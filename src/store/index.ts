import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { login } from "../reducers/login-reducer";
import { IUser } from "../types/types";

export interface IState {
    user: IUser;
}

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
    applyMiddleware(),
);

const reducers = combineReducers({
    login,
});

const store = createStore(reducers, enhancer);

export default store;
