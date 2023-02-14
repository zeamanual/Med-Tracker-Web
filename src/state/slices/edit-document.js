import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import editFile from "../../service/edit-document";

const initialState = {
  isEdited: false,
  errorMessage: null,
};

export const editFileById = createAsyncThunk(
<<<<<<< HEAD
    'edit-file/editFileById',
    async ({document,documentTitle,documentType,description,documentId, enqueueSnackbar},thunkApi) => {
        try {
            console.log(documentTitle, "klkk")
            const response = await editFile(document,documentTitle,documentType,description,documentId)
            const variant = 'success';
            enqueueSnackbar('Document Successfully Updated!', {variant} );
        
            return response.data;

        } catch (error) {
            const variant = 'error';
            enqueueSnackbar('Failed to update document!', {variant} );
        
            return thunkApi.rejectWithValue(error.message);
        }
=======
  "editFileById",
  async (Id, thunkApi) => {
    try {
      const response = await editFile(Id);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
>>>>>>> main
    }
  }
);

let editFileSlice = createSlice({
  name: "edit-file",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(editFileById.pending, (state) => {
      state.isEdited = false;
    });

    builder.addCase(editFileById.fulfilled, (state, action) => {
      state.isEdited = true;
    });

    builder.addCase(editFileById.rejected, (state, action) => {
      state.isEdited = false;
      state.errorMessage = action.payload;
    });
  },
});
// export const { fetchFilesStart, fetchFilesSuccess, fetchFilesError } = fetchFilesSlice.actions
export default editFileSlice.reducer;
