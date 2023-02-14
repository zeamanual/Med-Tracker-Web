import { clientInstance } from "../config/config";

const upload = (file, documentTitle, documentType, description) => {
  let formData = new FormData();

  formData.append("File", file);
  formData.append("Title", documentTitle);
  formData.append("Category", documentType);
  formData.append("Description", description);

<<<<<<< HEAD
  const upload = (document, documentTitle, documentType, description) =>{
    let formData = new FormData();
    console.log("upload")
    formData.append("File", document);
    formData.append("Title", documentTitle);
    formData.append("Catagory", documentType);
    formData.append("Description", description);

    return clientInstance.post(`/api/Document/add`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }


export default upload
=======
  return clientInstance.post(`/api/Document`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export default upload;
>>>>>>> main
