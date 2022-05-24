import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "../reducers/loginReducer";
import { productsReducer } from "../reducers/productsReducer";
import { registerReducer } from "../reducers/registerReducer";


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducersEnviar = combineReducers({
    login: loginReducer,
    register: registerReducer,
    products: productsReducer,
    
})

export const store = createStore(
    reducersEnviar,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

