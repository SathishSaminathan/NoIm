import { createStore, combineReducers } from 'redux';
import signUpReducer from "./reducers/signUpReducer";

const rootReducer = combineReducers({
    signUp:signUpReducer
});

const configureStore=()=>{
    return createStore(rootReducer)
}

export default configureStore;