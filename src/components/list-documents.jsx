import { useEffect , useState, useMemo} from "react";
import { useDispatch } from "react-redux";
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
// const newFiles = [
//         {name: 'test.pdf', documentType: 'Passport', documentTitle: "Test", description: "Test", id: 1},
//         {name: 'test.pdf', documentType: 'Certificate', documentTitle: "Test", description: "Test", id: 2},
//         {name: 'test.pdf', documentType: 'Insurance', documentTitle: "Test", description: "Test", id: 3},
//         {name: 'test.pdf', documentType: 'Passport', documentTitle: "Test", description: "Test", id: 4},
    
//     ]

const ListDocuments = () => {
    

    const dispatch = useDispatch();
    // const [files, setFiles] = useState([]);
    // const files = newFiles;
    const files = useSelector(state => state.files);
    const isLoading = useSelector(state => state.isLoading);
    const errorMessage = useSelector(state => state.errorMessage);
    const groupedFiles = files.reduce((group, file) => {
        const { documentType } = file;
        group[documentType] = group[documentType] ?? [];
        group[documentType].push(file);
        return group;
    }, {});
    // console.log(newFiles);
    // console.log(groupedFiles);
    // DocumentType.forEach(eachType => {
    //         console.log(groupedFiles[eachType])
    // });
    useEffect(() => {
        // setFiles(newFiles);
        dispatch(fetchFiles());
    },[dispatch]);

    return (
        <>
        <p>new</p>
        {isLoading ? <CircularProgress /> :
        DocumentType.map(eachType => {
            return groupedFiles[eachType] !== undefined ? 
            <Lists key={eachType} data={groupedFiles[eachType]} title ={eachType}/> :
            <Lists key={eachType} data={[]} title ={eachType}/>
        })}
        {errorMessage && <p>failed to load data!</p>}
        </>
        
    )
}

export default ListDocuments;