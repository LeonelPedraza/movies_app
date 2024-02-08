import { useQuery } from "@tanstack/react-query"
import { getMoviesGenre } from "../services/genre"


export const useMoviesGenre = () => {
    const { isLoading, isError, error, data } = useQuery({
        queryKey: ['movies_genre'],
        queryFn: getMoviesGenre
    })

    return {
        isLoading,
        isError,
        error,
        data: data?.genre,
    }
}