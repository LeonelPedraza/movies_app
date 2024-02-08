import axios from "axios"
import { Genre } from "../hooks/types/types"
import { system_language } from "../config/languages"

const API_KEY = import.meta.env.VITE_API_KEY
const API_URL = import.meta.env.VITE_API_URL

interface GenreResponse {
    genre: Genre[], 
    nextCursor: number
}

const headers = {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
}



export const getMoviesGenre = (): Promise<GenreResponse> => {
    return axios.get(`${API_URL}/genre/movie/list?language=${system_language}`, { headers })
    .then((res) => {
        const currentPage = res.data.page
        const nextCursor = currentPage == res.data.total_pages ? undefined : currentPage + 1

        return {
            genre: res.data.genres,
            nextCursor
        }
    })
}