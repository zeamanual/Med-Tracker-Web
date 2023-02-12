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

const ListDocuments = (props) => {
    
    const [loading, setLoading] = useState(true);
    // const dispatch = useDispatch();
    const [files, setFiles] = useState(props.data);
    // const files = newFiles;
    // const files = useSelector(state => state.files);
    // const isLoading = useSelector(state => state.isLoading);
    // const errorMessage = useSelector(state => state.errorMessage);
    const groupedFiles = files.reduce((group, file) => {
        const { catagory } = file;
        group[catagory] = group[catagory] ?? [];
        group[catagory].push(file);
        return group;
    }, {});
    // console.log(newFiles);
    console.log(groupedFiles);
    // DocumentType.forEach(eachType => {
    //         console.log(groupedFiles[eachType])
    // });
    useEffect(() => {
        // setLoading(true);
        const timeOutId = setTimeout(() => {

        setLoading(false);
        }, 1000);
        return () => {
            clearTimeout(timeOutId);
        }
        
    },[]);

    return (
        <>
        {loading ? <CircularProgress /> :

        DocumentType.map(eachType => {
            return groupedFiles[eachType] !== undefined ? 
            <Lists key={eachType} data={groupedFiles[eachType]} title ={eachType}/> :
            <Lists key={eachType} data={[]} title ={eachType}/>
        })}
        </>
        
    )
}

export default ListDocuments;