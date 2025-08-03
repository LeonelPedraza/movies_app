import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { getMovieDetails, getMovieImages, getPopularesMovies, getTopRated, getUpcoming, searchMovies } from '../services/movies/movies'

export const MOVIES_QUERY_KEYS = {
    POPULARES: 'POPULARES',
    TOP_RATED: 'TOP_RATED',
    UPCOMING: 'UPCOMING',
    SEARCH: 'SEARCH',
    DETAILS: 'DETAILS',
    IMAGES: 'IMAGES'
}

export const usePopularesMovies = () => {
    const { isLoading, isError, error, data, fetchNextPage } = useInfiniteQuery({
        queryKey: [MOVIES_QUERY_KEYS.POPULARES],
        queryFn: getPopularesMovies,
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.nextCursor,
        staleTime: Infinity
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
        queryKey: [MOVIES_QUERY_KEYS.TOP_RATED],
        queryFn: getTopRated,
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.nextCursor,
        staleTime: Infinity
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
        queryKey: [MOVIES_QUERY_KEYS.UPCOMING],
        queryFn: getUpcoming,
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.nextCursor,
        staleTime: Infinity
    })

    return {
        isLoading,
        isError,
        error,
        data: data?.pages.flatMap(item => item.movies)
    }
}

export const useSearchMovies = ({query}: {query: string}) => {
    const { isLoading, isError, error, data, fetchNextPage } = useInfiniteQuery({
        queryKey: [MOVIES_QUERY_KEYS.SEARCH, query],
        queryFn: async () => await searchMovies({query}),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.nextCursor,
        staleTime: Infinity
    })
    return {
        isLoading,
        isError,
        error,
        data,
        fetchNextPage
    }
}

export const useMovieDetails = ({id}: {id: number}) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: [MOVIES_QUERY_KEYS.DETAILS, id],
        queryFn: () => getMovieDetails({id}),
        staleTime: Infinity
    })
    return {
        isLoading,
        isError,
        movie_details: data
    }
}

export const useMoviewImages = ({id}: {id: number}) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: [MOVIES_QUERY_KEYS.IMAGES, id],
        queryFn: () => getMovieImages({id}),
        staleTime: Infinity
    })
    return {
        isLoading,
        isError,
        movie_images: data
    }
}