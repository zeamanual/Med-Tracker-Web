import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from '../slices/user'
import sotredListReducer from '../slices/storedLists'
import addDocumentSlice from '../slices/new-document'
import fetchFilesSlice from '../slices/list-documents';
import editFileSlice from '../slices/edit-document';
import deleteFileSlice from '../slices/delete-document';

let rootReducer = combineReducers({
    user:userReducer,
    storedList:sotredListReducer,
    addDocument: addDocumentSlice,
    files: fetchFilesSlice,
    editDocument: editFileSlice,
    deleteDocument : deleteFileSlice
})

let store = configureStore({
    reducer:rootReducer
})

export default store