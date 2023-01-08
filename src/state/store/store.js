import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from '../slices/user'

let rootReducer = combineReducers({
    user:userReducer
})

let store = configureStore({
    reducer:rootReducer
})

export default store