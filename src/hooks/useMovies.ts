import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { getMovieDetails, getMovieImages, getPopularesMovies, getTopRated, getUpcoming } from '../services/movies/movies'

export const usePopularesMovies = () => {
    const { isLoading, isError, error, data, fetchNextPage } = useInfiniteQuery({
        queryKey: ['populares'],
        queryFn: getPopularesMovies,
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.nextCursor
    })

    return {
        isLoading,
        isError,
        error,
        data: data?.pages.flatMap(item => item.movies),
        fetchNextPage
    }
}

export const useTopRatedMovies = () => {
    const { isLoading, isError, error, data } = useInfiniteQuery({
        queryKey: ['top_rated'],
        queryFn: getTopRated,
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.nextCursor
    })

    return {
        isLoading,
        isError,
        error,
        data: data?.pages.flatMap(item => item.movies)
    }
}

export const useUpcomingMovies = () => {
    const { isLoading, isError, error, data } = useInfiniteQuery({
        queryKey: ['upcoming'],
        queryFn: getUpcoming,
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.nextCursor
    })

    return {
        isLoading,
        isError,
        error,
        data: data?.pages.flatMap(item => item.movies)
    }
}

export const useMovieDetails = ({id}: {id: number}) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['movie_details', id],
        queryFn: () => getMovieDetails({id}),
    })
    return {
        isLoading,
        isError,
        movie_details: data
    }
}

export const useMoviewImages = ({id}: {id: number}) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['movie_images', id],
        queryFn: () => getMovieImages({id})
    })
    return {
        isLoading,
        isError,
        movie_images: data
    }
}