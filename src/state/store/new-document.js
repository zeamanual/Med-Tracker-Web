import { combineReducers, configureStore } from "@reduxjs/toolkit";
import newDocumentReducer from '../slices/new-document'

const rootReducer = combineReducers({
    addDocument:newDocumentReducer
})

const store = configureStore({
    reducer:rootReducer
})

export default store