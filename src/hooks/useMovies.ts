import { useInfiniteQuery } from '@tanstack/react-query'
import { getPopularesMovies } from '../services/movies'

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
        data: data?.pages.flatMap(item => item.populares)
    }
}


