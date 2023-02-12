import { clientInstance,BASE_URL } from '../config/config'


export let diagnosesListAPI = async (name)=>{
    return clientInstance({
        url:`${BASE_URL}/api/Diagnoses/search?name=${name}`,
        method:'get',
    })
}
export let diagnosesAddAPI = async (id)=>{
    return clientInstance({
        
        url:`${BASE_URL}/api/Diagnoses/add/${id}`,
        method:'get',
    })
}
export let diagnosesDeleteAPI = async (id)=>{
    return clientInstance({
        url:`${BASE_URL}/api/Diagnoses/${id}`,
        method:'delete',
    })
}
