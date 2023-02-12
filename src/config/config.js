import axios from "axios"

export const BASE_URL = 'https://0cda-2a0d-5600-44-5000-00-1da7.ngrok.io'

export let clientInstance = axios.create({
    headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
    baseURL: BASE_URL
})

