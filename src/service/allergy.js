import { clientInstance,BASE_URL } from '../config/config'

export let allergiesListAPI = async (name)=>{
    return clientInstance({
        
        url:`${BASE_URL}/api/Allergies/search?name=${name}`,
        method:'get',
    })
}
export let allergyAddAPI = async (id)=>{
    return clientInstance({
        
        url:`${BASE_URL}/api/Allergies/add/${id}`,
        method:'get',
    })
}
export let allergyDeleteAPI = async (id)=>{
    return clientInstance({
        
        url:`${BASE_URL}/api/Allergies/${id}`,
        method:'delete',
    })
}