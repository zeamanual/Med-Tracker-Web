import axios from "axios";
let BASE_URL ;

  const upload = (file, documentTitle, documentType, description) =>{
    let formData = new FormData();

    formData.append("file", file);
    formData.append("title", documentTitle);
    formData.append("type", documentType);
    formData.append("description", description);

    return axios.post(`${BASE_URL}/upload`,formData)
    
  }


export default upload
