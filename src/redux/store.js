import {applyMiddleware, combineReducers, compose, createStore, legacy_createStore} from "redux";
import shipmentsReducer from "./shipments-reducer";
import thunkMiddleware from "redux-thunk";
import anyReducer from "./any-reducer";



let reducers = combineReducers({
    shipments: shipmentsReducer,
    another: anyReducer
});


/*const store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));*/

/*const store = createStore(
    shipmentsReducer,
    applyMiddleware(thunkMiddleware),
);*/


/*const store = createStore(
    reducers,
    applyMiddleware(thunkMiddleware),
);*/

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


window.__store__ = store;

/*const store = legacy_createStore(reducers);*/

export default store;