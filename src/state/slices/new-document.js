import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import upload from "../../service/new-document";

const initialState = {
  uploadData: {
    pendingUploads: false,
    errorMessage: "",
    successUploads: false,
  },
};

export const uploadData = createAsyncThunk(
<<<<<<< HEAD
    'newDocument/upload',
    async ({document, documentTitle, documentType, description, enqueueSnackbar}, thunkApi) => {
        try {
            console.log(document, documentTitle, documentType, description)
            let response = await upload(document, documentTitle, documentType, description)
            console.log(response);
            console.log("2upload")
            const variant = 'success'
            enqueueSnackbar('Document Successfully Added!', {variant})
            return response.data;

        } catch (error) {
            console.log(error, "error");
            const errorMessage = error.message
            return thunkApi.rejectWithValue(errorMessage);
        }
=======
  "newDocument/upload",
  async ({ file, documentTitle, documentType, Description }, thunkApi) => {
    try {
      let response = await upload(
        file,
        documentTitle,
        documentType,
        Description
      );
      console.log(response);
      return response.data;
    } catch (error) {
      const errorMessage = error.message;
      return thunkApi.rejectWithValue(errorMessage);
>>>>>>> main
    }
  }
);
let addDocumentSlice = createSlice({
  name: "newDocument",
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.uploadData.pendingUploads = false;
      state.uploadData.errorMessage = "";
      state.uploadData.successUploads = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(uploadData.pending, (state) => {
      state.uploadData.pendingUploads = true;
      state.uploadData.errorMessage = "";
      state.uploadData.successUploads = true;
    });

    builder.addCase(uploadData.fulfilled, (state, action) => {
      state.uploadData.pendingUploads = false;
      state.uploadData.errorMessage = "";
      state.uploadData.successUploads = true;
    });

    builder.addCase(uploadData.rejected, (state, action) => {
      state.uploadData.pendingUploads = false;
      state.uploadData.errorMessage = action.payload;
      state.uploadData.successUploads = false;
    });
  },
});
export const { resetStatus } = addDocumentSlice.actions;
export default addDocumentSlice.reducer;
