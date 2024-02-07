import axios from "axios"
import { Movie } from "../hooks/types/types"

const API_KEY = import.meta.env.VITE_API_KEY
const API_URL = import.meta.env.VITE_API_URL

interface MoviesResponse {
    movies: Movie[], 
    nextCursor: number
}

const headers = {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
}

const language = localStorage.getItem('lng') !== null ? localStorage.getItem('lng') : 'us-US'

export const getPopularesMovies = ({ pageParam = 1 }: { pageParam?: number }): Promise<MoviesResponse> => {
    return axios.get(`${API_URL}/popular?language=${language}&page=${pageParam}`, { headers })
    .then((res) => {
        const currentPage = res.data.page
        const nextCursor = currentPage == res.data.total_pages ? undefined : currentPage + 1

        return {
            movies: res.data.results,
            nextCursor
        }
    })
}

export const getTopRated = ({ pageParam = 1 }: { pageParam?: number }): Promise<MoviesResponse> => {
    return axios.get(`${API_URL}/top_rated?language=${language}&page=${pageParam}`, { headers })
    .then((res) => {
        const currentPage = res.data.page
        const nextCursor = currentPage == res.data.total_pages ? undefined : currentPage + 1

        return {
            movies: res.data.results,
            nextCursor
        }
    })
}

export const getUpcoming = ({ pageParam = 1 }: { pageParam?: number }): Promise<MoviesResponse> => {
    return axios.get(`${API_URL}/upcoming?language=${language}&page=${pageParam}`, { headers })
    .then((res) => {
        const currentPage = res.data.page
        const nextCursor = currentPage == res.data.total_pages ? undefined : currentPage + 1

        return {
            movies: res.data.results,
            nextCursor
        }
    })
} 