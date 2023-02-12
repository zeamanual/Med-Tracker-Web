import { clientInstance } from "./conf";

const editFile = (id) => {

    return clientInstance.post(`/api/Document/Update/${id}`)
  

}

export default editFile;