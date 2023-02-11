import axios from "axios";
let BASE_URL ;

const deleteFile = (id) => {

    return axios.delete(`${BASE_URL}/id`)
  

}

export default deleteFile;