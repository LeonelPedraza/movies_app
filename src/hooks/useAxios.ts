import axios from "axios"

const API_KEY = import.meta.env.VITE_API_KEY
const API_URL = import.meta.env.VITE_API_URL

interface Request {
    path: string,
}

export const sendRequest = ({ path }: Request) => {
    return axios.get(`${API_URL}${path}`, {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`
        }
    })
}