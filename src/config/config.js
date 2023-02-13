import axios from "axios";


export const BASE_URL = 'https://0776-2a0d-5600-41-9000-00-5421.ngrok.io/'

let token = localStorage.getItem("token");

export let clientInstance = axios.create({
    headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
        "Authorization":`${token}`,
        "Access-Control-Allow-Origin":"*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
    baseURL: BASE_URL
})

