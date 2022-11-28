import axios from "axios";

const BASE_URL = 'http://localhost:8000/api'
const persistRoot = JSON.parse(localStorage.getItem('persist:root'));
const TOKEN = () => {
    if (persistRoot) {
        if (JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser) {
            return JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken
        } else {
            return ''
        }

    } else {
        return ''
    }
}

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN()}` }
})