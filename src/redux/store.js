import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import {liquidsReducer} from "./reducers/liquids-reducers";
import {devicesReducer} from "./reducers/devices-reducers";


let reducers = combineReducers({
    liquidsReducer,
    devicesReducer
})


const composeEnhancers =  compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store