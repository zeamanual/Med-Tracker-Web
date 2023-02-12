import { clientInstance } from "../config/config"


export const loginAPI = async (username, password) => {
    return clientInstance.post('/api/user/Auth/login', {
        username, password
    })

}
export const SignupAPI = async (firstName, lastName, email, password) => {
    return clientInstance.post('/api/user/Auth/register', {
        firstName, lastName, email, password
    })

}

export const profileUpdateAPI = async (profileInformation) => {
    return clientInstance.post('/api/Profile/update', {
        profileInformation
    })

}

export const getProfileAPI = async () => {
    return clientInstance.get('/api/Profile/get')

}
