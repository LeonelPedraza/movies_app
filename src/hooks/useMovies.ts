import { useInfiniteQuery } from '@tanstack/react-query'
import { getPopularesMovies, getTopRated, getUpcoming } from '../services/movies'

export const usePopularesMovies = () => {
    const { isLoading, isError, error, data } = useInfiniteQuery({
        queryKey: ['populares'],
        queryFn: getPopularesMovies,
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


