import axios from "axios";
let BASE_URL ;
// class UploadNewDocumentService {

  const upload = (file, documentTitle, documentType, Description) =>{
    let formData = new FormData();

    formData.append("file", file, file.name);

    return axios.post(`http://localhost:8080/upload`,
        {
            formData, documentTitle, documentType, Description
        }
    )
    
  }

// }
export default upload
// export default new UploadNewDocumentService();