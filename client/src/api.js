import axios from "axios";

const BASE_URL = 'http://localhost:8000/api/'
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNTI4NzNlZGUwOWYwNWM1YmMzNjI3YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NjQ2MTM4MSwiZXhwIjoxNjY2NzIwNTgxfQ.dgC07jUsr726mvuJ1QucthvXmTIakcTUCnS3Aer4VIE'

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` }
})