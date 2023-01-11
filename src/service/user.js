import axios from 'axios'

// wll be changed to read from environment variable
let BASE_URL = 'baseUrl'

export let loginAPI = async (username,password)=>{
    return axios({
        url:`${BASE_URL}/user`,
        method:'post',
        data:{
            username,password
        }
    })
}