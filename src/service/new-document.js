import { clientInstance } from "../config/config";



  const upload = (file, documentTitle, documentType, description) =>{
    let formData = new FormData();

    formData.append("File", file);
    formData.append("Title", documentTitle);
    formData.append("Category", documentType);
    formData.append("Description", description);

    return clientInstance.post(`/api/Document`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }


export default upload
