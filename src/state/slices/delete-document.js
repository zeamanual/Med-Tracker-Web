import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import deleteFile from '../../service/delete-document';


const initialState = {
    isDeleted: false,
    errorMessage: null,
}

export const deleteFileById = createAsyncThunk(
    'deleteFileById',
    async (Id,thunkApi) => {
        try {
            const response = await deleteFile(Id)
            return response;

        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)

let deleteFileSlice = createSlice({
    name: 'delete-file',
    initialState,
    reducers: {
        
    },

    extraReducers: (builder) => {
        builder.addCase(deleteFileById.pending, (state) => {
            state.isDeleted = false;
        })

        builder.addCase(deleteFileById.fulfilled, (state, action) => {
            state.isDeleted = true;
        })

        builder.addCase(deleteFileById.rejected, (state, action) => {
            state.isDeleted = false;
            state.errorMessage = action.payload;
        })
    }
})
// export const { fetchFilesStart, fetchFilesSuccess, fetchFilesError } = fetchFilesSlice.actions
export default deleteFileSlice.reducer