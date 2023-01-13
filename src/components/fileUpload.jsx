 import { Button } from '@mui/material';
 import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import React, { useState} from 'react';
const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000;
 const FileUpload = ({updateFileCb,
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES, isProvided , name}) => {
  const [file, setFile] = useState();
  const [error, setError] = useState(false);
  const handleNewFileUpload = (e) => {
    const newFile= e.target.files[0];
    if (newFile.size > maxFileSizeInBytes) {
      setError(true);
    }


    else{
      setFile(newFile);
      updateFileCb(newFile)
    }
    
  };
  //

    return (<>
      <div className={error || isProvided ? 'file-upload-container error-msg' : 'file-upload-container'}>
        {name ? <span className = 'file-upload-name'>{name}</span> : file ? <span className = 'file-upload-name'>{file.name}</span>:
        <Button variant='contained' className = 'file-upload-button'> <DriveFolderUploadIcon /> Add</Button>}
        <input
          type="file"
          onChange={handleNewFileUpload}
          title=""
          value=""
          multiple={false}
        />
      </div>
      {error && <span className="error-message">File size should be less than {maxFileSizeInBytes/1000} KB</span>}
            {isProvided && <span className="error-message">Please Upload some file</span>}
      </>
    )
 }

 export default FileUpload;