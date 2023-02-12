import axios from "axios"

export const BASE_URL = 'https://7dae-2a0d-5600-42-1000-00-b802.ngrok.io/'

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

