import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import  upload from '../../service/new-document';

const initialState = {
    uploadData: {
        pendingUploads: false,
        errorMessage: '',
        successUploads: false,
    }
}

export const uploadData = createAsyncThunk(
    'newDocument/upload',
    async ({file, documentTitle, documentType, Description}, thunkApi) => {
        try {
            let response = await upload(file, documentTitle, documentType, Description)
            console.log(response);
            return response.data;

        } catch (error) {
            const errorMessage = error.message
            return thunkApi.rejectWithValue(errorMessage);
        }
    }
)
let addDocumentSlice = createSlice({
    name: 'newDocument',
    initialState,
    reducers: {
        resetStatus:(state)=>{
            state.uploadData.pendingUploads=false
            state.uploadData.errorMessage=''
            state.uploadData.successUploads=false
            
        }
    },
    extraReducers: (builder) => {
        builder.addCase(uploadData.pending, (state)=>{
            state.uploadData.pendingUploads=true
            state.uploadData.errorMessage=''
            state.uploadData.successUploads=true
        })

        builder.addCase(uploadData.fulfilled, (state,action)=>{
            state.uploadData.pendingUploads=false
            state.uploadData.errorMessage=''
            state.uploadData.successUploads=true
        })

        builder.addCase(uploadData.rejected, (state,action)=>{
            state.uploadData.pendingUploads=false
            state.uploadData.errorMessage=action.payload
            state.uploadData.successUploads=false
        })
    }
})
export const {resetStatus} = addDocumentSlice.actions
export default addDocumentSlice.reducer
