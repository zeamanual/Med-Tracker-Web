import axios from 'axios'

// wll be changed to read from environment variable
let BASE_URL = 'baseUrl'

export let allergiesListAPI = async ()=>{
    return axios({
        url:`${BASE_URL}/allegies`,
        method:'get',
    })
}
export let medicinesListAPI = async ()=>{
    return axios({
        url:`${BASE_URL}/medicines`,
        method:'get',
    })
}
export let diagnosesListAPI = async ()=>{
    return axios({
        url:`${BASE_URL}/diagnoses`,
        method:'get',
    })
}
export let vaccinesListAPI = async ()=>{
    return axios({
        url:`${BASE_URL}/vacines`,
        method:'get',
    })
}