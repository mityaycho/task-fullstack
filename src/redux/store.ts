import {applyMiddleware, combineReducers, createStore} from "redux";
import reducer from "./counter-reducer";
import thunkMiddleware from "redux-thunk";


const rootReducer = combineReducers({
    counter: reducer
});

export type IState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;