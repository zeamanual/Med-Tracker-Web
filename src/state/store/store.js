import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from '../slices/user'
import sotredListReducer from '../slices/storedLists'

let rootReducer = combineReducers({
    user:userReducer,
    storedList:sotredListReducer
})

let store = configureStore({
    reducer:rootReducer
})

export default store