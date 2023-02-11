import axios from "axios";
let BASE_URL ;

const getFiles = () => {

    return axios.get(`${BASE_URL}/files`)
  

}

export default getFiles