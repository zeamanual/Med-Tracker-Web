import { clientInstance,BASE_URL } from '../config/config'



export let medicinesListAPI = async (name)=>{
    return clientInstance({
        url:`${BASE_URL}/api/Medicine/search?name=${name}`,
        method:'get',
    })
}


export let medicineAddAPI = async (id)=>{
    return clientInstance({
        url:`${BASE_URL}/api/Medicine/add/${id}`,
        method:'get',
    })
}
export let medicineDeleteAPI = async (id)=>{
    return clientInstance({
        
        url:`${BASE_URL}/api/Medicine/${id}`,
        method:'delete',
    })
}
