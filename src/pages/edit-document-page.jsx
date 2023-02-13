import React, { useState , useEffect, useMemo} from "react";
import FileUpload from "../components/fileUpload";
import { TextField, MenuItem, Button, Box } from "@mui/material";
import {resetStatus, uploadData} from '../state/slices/new-document'
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { useParams } from 'react-router-dom';
import { editFileById } from "../state/slices/edit-document";

const DocumentType = [
  'Certificate',
  "Discharge Summary",
  "Insurance",
  "Living Will",
  "Passport",
  "Prescription",
  "Travel Document",
  "X-ray",
  "Other",
];

const EditDocumentPage = (props) => {
  const [document, setDocument] = useState();
  const [documentTitle, setDocumentTitle] = useState('');
  // const item = props.item.catagory;
  // console.log(item);
  // if (props.item){
  //   console.log(props.item.catagory);
  // }
  // const item = useMemo(() => ({file:'file.pdf', documentTitle:'health', name:'max.pdf', description: 'me on the moon', documentType: 'Discharge Summary'}), []);

  const [formData, setFormData] = useState({});
  const [documentType, setDocumentType] = useState('Certificate');
  const [description, setDescription] = useState('');
  const [documentError, setDocumentError] = useState({
    documentErrorMessage: false,
    documentTitleErrorMessage: false,
  });
  const dispatch = useDispatch();
  const data = useSelector(state => state.addDocument);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setFormData(props.item);
    // if (props.item){
      setDocumentType(props.item.catagory);
    // }
  }, [props.item, props.item.catagory]);


  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleDocumentType = (e) => {
    setDocumentType(e.target.value);
  };
  const handleDocumentTitle = (e) => {
    if (e.target.value.length <= 5) {
      setDocumentError({ ...documentError, documentTitleErrorMessage: true });
    } else if (e.target.value.length >= 6) {
      setDocumentError({ ...documentError, documentTitleErrorMessage: false });
    }
    setDocumentTitle(e.target.value);
  };
  const updateFileCb = (file) => {
    if (file === undefined) {
      setDocumentError(true);
      setDocumentError({ ...documentError, documentErrorMessage: true });
    }
    if (file !== undefined) {
      setDocumentError({ ...documentError, documentErrorMessage: false });
    }
    setDocument(file);
  };
  const handleAddNewDocument = (e) => {
    e.preventDefault();
    if (documentTitle.length === 0) {
      documentError.documentTitleErrorMessage = true;
      setDocumentError({ ...documentError, documentTitleErrorMessage: true });
    }
    if (document === undefined) {
      documentError.documentErrorMessage = true;
      setDocumentError({ ...documentError, documentErrorMessage: true });
    } else if (
      documentError.documentErrorMessage === false &&
      documentError.documentTitleErrorMessage === false
    ) {
      dispatch(editFileById(document, documentTitle, documentType, description));
      if (data.uploadData.successUploads){
        const variant = 'success';
        enqueueSnackbar('Document Successfully Added!', {variant} );
        dispatch(resetStatus());

      }
      else if (data.uploadData.errorMessage.length !== 0) {
        const variant = 'error'
        enqueueSnackbar('Failed to upload document !', {variant} );
      }
      
    }
  };
  return (
    <Box component="form" onSubmit={handleAddNewDocument} sx={{ width: '36em !important',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100vh',
  margin: '0 auto',
  padding: '2em',
  }}>
      <Box sx={{display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '1em',
  width: '100%'}}>
        <h2>Edit your document</h2>
        <FileUpload name = {formData.title}
          updateFileCb={updateFileCb}
          maxFileSizeInBytes={9000000000}
          isProvided={documentError.documentErrorMessage}
        />
        <TextField
          value={formData.title}
          onChange={handleDocumentTitle}
          error={documentError.documentTitleErrorMessage}
          fullWidth
          variant="outlined"
          placeholder="Document Title"
          helperText={
            documentError.documentTitleErrorMessage &&
            "Please Provide Document Title or is too short!"
          }
        />
        <TextField
          fullWidth
          select
          label="Document Type"
          value={documentType}
          onChange={handleDocumentType}
        >
          {DocumentType.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <TextField
        value={formData.description}
          onChange={(e) => handleDescription(e)}
          multiline
          maxRows={9}
          fullWidth
          variant="outlined"
          placeholder="Description(Optional)"
        />
      </Box>
      <Button type="submit" variant="contained" sx={{ marginBottom: '2em !important',
  width: '100%',
  height: '4em',
  borderRadius: '6px'}}>
        {" "}
        UPDATE DOCUMENT
      </Button>
    </Box>
  );
};

export default EditDocumentPage;
