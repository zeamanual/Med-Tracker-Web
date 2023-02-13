import axios from "axios"

export const BASE_URL = 'https://f918-2a0d-5600-41-b000-00-2d8e.ngrok.io/'

let token = localStorage.getItem('token')

export let clientInstance = axios.create({
    headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
        "Authorization":`${token}`,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
    baseURL: BASE_URL
})

