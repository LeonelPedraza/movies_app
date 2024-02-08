import axios from "axios"
import { Movie } from "../../hooks/types/types"
import { system_language } from "../../config/languages"

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

export const getPopularesMovies = ({ pageParam = 1 }: { pageParam?: number }): Promise<MoviesResponse> => {
    return axios.get(`${API_URL}/movie/popular?language=${system_language}&page=${pageParam}`, { headers })
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
    return axios.get(`${API_URL}/movie/top_rated?language=${system_language}&page=${pageParam}`, { headers })
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
    return axios.get(`${API_URL}/movie/upcoming?language=${system_language}&page=${pageParam}`, { headers })
    .then((res) => {
        const currentPage = res.data.page
        const nextCursor = currentPage == res.data.total_pages ? undefined : currentPage + 1

        return {
            movies: res.data.results,
            nextCursor
        }
    })
} 