import { useSearchParams } from "react-router-dom"
import { useSearchMovies } from "../../hooks/useMovies"
import { MoviePosterItem } from "../../components/carousel/movie_poster_item"

export const SearchMovies = () => {

    const [searchParams] = useSearchParams()

    const { isLoading, isError, error, data} = useSearchMovies({ query: searchParams.get('query') ?? '' })

    const movies = data?.pages[0]?.movies

    return (
        <div className="px-4 py-4 lg:px-20 md:py-28">
            {
                isLoading && 
                <h1 className="text-xl text-white/50 text-center">Buscando...</h1>
            }
            {
                isError &&
                <h1 className="text-xl font-bold text-white">{error?.message}</h1>
            }
            {
                !isLoading && movies && movies.length == 0 &&
                <h1 className="text-xl text-white/50 text-center">No results</h1>
            }
            {
                !isLoading && movies && movies.length > 0 &&
                <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-16 items-center justify-center gap-4 md:gap-8">
                    {
                        movies?.map(item => (
                            <div className="relative w-full h-full overflow-hidden flex items-center justify-center hover:scale-110 hover:z-40 transition ease-linear cursor-pointer">
                                <MoviePosterItem key={item.id} movie={item} show_rating={false} className="w-60 h-80" />
                            </div>
                        ))
                    }

                </div>
            }
        </div>
    )
}