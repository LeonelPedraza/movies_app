import axios from "axios"
import { Images, Movie } from "../../hooks/types/types"
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

export const getMovieDetails = ({ id }: { id: number }): Promise<Movie> => {
    return axios.get(`${API_URL}/movie/${id}?append_to_response=credits,videos,reviews,similar&language=${system_language}`, { headers })
    .then((res) => res.data)
}

export const getMovieImages = ({ id }: { id: number }): Promise<Images> => {
    return axios.get(`${API_URL}/movie/${id}/images`, { headers })
    .then((res) => res.data)
}
