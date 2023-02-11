import { clientInstance } from "./conf"
const getFiles = () => {

    return clientInstance.get(`/api/Document`)
  

}

export default getFiles