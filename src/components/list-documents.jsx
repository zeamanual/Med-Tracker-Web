import { useEffect, useDispatch } from "react";
import fetchFiles from '../state/slices/list-documents'
import { useSelector } from "react-redux";
import CircularProgress from '@mui/material/CircularProgress';
import Lists from './lists';

const DocumentType = [
  "Certificate",
  "Discharge Summary",
  "Insurance",
  "Living Will",
  "Passport",
  "Prescription",
  "Travel Document",
  "X-ray",
  "Other",
];

const ListDocuments = () => {

    const dispatch = useDispatch();
    const files = useSelector(state => state.files);
    const isLoading = useSelector(state => state.isLoading);
    const errorMessage = useSelector(state => state.errorMessage);
    const groupedFiles = files.groupByToMap(file => file.DocumentType);

    useEffect(() => {
        dispatch(fetchFiles());
    },[dispatch]);

    return (
        <>
        {isLoading ? <CircularProgress /> :
        groupedFiles.forEach((file, documentType) => {
            <Lists data={file} title ={documentType}/>
        })}
        {errorMessage && <p>failed to load data!</p>}
        </>
        
    )
}

export default ListDocuments;