import { useTranslation } from "react-i18next";
import { MoviePosterItem } from "../../components/carousel/movie_poster_item";
import { usePopularesMovies } from "../../hooks/useMovies";

export const Movies = () => {

    const { t: translations } = useTranslation()
    const { data: popularesMovies, fetchNextPage } = usePopularesMovies()

    return (
        <div className="px-4 md:px-16 py-20">
            <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-16 items-center justify-center gap-4 md:gap-8">
                {
                    popularesMovies?.map(item => (
                        <div className="relative w-full h-full overflow-hidden flex items-center justify-center hover:scale-110 hover:z-40 transition ease-linear cursor-pointer">
                            <MoviePosterItem movie={item} className="w-60 h-80"/>
                        </div>
                    ))
                }

            </div>
            <div className="w-full mt-16 flex justify-center items-center">
                <button onClick={() => fetchNextPage()} className="px-8 py-1.5 bg-neutral-800 rounded-lg first-letter:uppercase">{translations('general.view-more')}</button>
            </div>
        </div>
    );
}
