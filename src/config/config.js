import axios from "axios"

export const BASE_URL = 'http://2055-2a0d-5600-43-4000-00-b611.ngrok.io'

export let clientInstance = axios.create({
    headers:{
        'ngrok-skip-browser-warning':'true'
    },
})

