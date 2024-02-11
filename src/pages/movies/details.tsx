import { useLocation } from "react-router-dom";
import { useMovieDetails, useMoviewImages } from "../../hooks/useMovies";
import { ImagesSlider } from "../../components/home/images_slide";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MoviePosterItem } from "../../components/carousel/movie_poster_item";
import { useTranslation } from "react-i18next";

export const MovieDetails = () => {

    const location = useLocation()
    const { t: translations } = useTranslation()

    const { movie_details, isLoading } = useMovieDetails({ id: location.state.id })
    const { movie_images, isLoading: images_loading } = useMoviewImages({ id: location.state.id })

    return (
        <div className="relative">
            {
                images_loading ?
                    <div className="w-full h-screen flex items-center justify-center">
                        <AiOutlineLoading3Quarters className="text-3xl text-white font-bold animate-spin" />
                    </div>
                    :
                    <ImagesSlider
                        landscape_paths={movie_images?.backdrops.slice(0, 20).map(item => item.file_path)}
                        portrait_paths={movie_images?.posters.slice(0, 20).map(item => item.file_path)}
                        delay={6000}
                    />
            }
            <div className="absolute flex top-0 w-screen h-screen z-40 px-20 py-28">
                <div className="flex items-end justify-start gap-8 h-80 mt-auto">
                    <MoviePosterItem movie={movie_details} className="w-56 h-80" show_rating={false}/>
                    {
                        !isLoading &&
                        <div className="h-full flex flex-col gap-4 text-white">
                            <div className="border-2 border-white max-w-min px-4 py-2 rounded-lg">
                                <p className="text-2xl font-bold">{movie_details?.vote_average.toFixed(1)}</p>
                            </div>
                            <p className="text-2xl font-semibold">{translations('movies.total-votes', {votes: movie_details?.vote_count})} </p>
                            {/* <p>{movie_details?.popularity}</p> */}
                            <p className="text-6xl font-bold">{movie_details?.original_title}</p>
                            <p className="text-3xl font-semibold">{movie_details?.tagline}</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}
