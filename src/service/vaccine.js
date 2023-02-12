import { clientInstance,BASE_URL } from '../config/config'


export let vaccinesListAPI = async (name)=>{
    return clientInstance({
        url:`${BASE_URL}/api/Vaccine/search?name=${name}`,
        method:'get',
    })
}
export let vaccineAddAPI = async (id)=>{
    return clientInstance({
        
        url:`${BASE_URL}/api/Vaccine/add/${id}`,
        method:'get',
    })
}
export let vaccineDeleteAPI = async (id)=>{
    return clientInstance({
        
        url:`${BASE_URL}/api/Vaccine/${id}`,
        method:'delete',
    })
}