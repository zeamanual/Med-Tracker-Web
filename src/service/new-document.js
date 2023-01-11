import axios from "axios";
let BASE_URL ;
// class UploadNewDocumentService {

  const upload = (file, documentTitle, documentType, Description) =>{
    let formData = new FormData();

    formData.append("file", file, file.name);

    return axios.post({BASE_URL},
        {
            formData, documentTitle, documentType, Description
        }
    )
    
  }

// }
export default upload
// export default new UploadNewDocumentService();