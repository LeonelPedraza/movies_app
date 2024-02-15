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
        <div className="relative tracking-wide">
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
            <div className="md:absolute flex top-0 w-screen md:h-screen z-40 px-4 md:px-20 py-4 md:py-28">
                <div className="flex flex-col md:flex-row items-center justify-start gap-2 md:gap-8 md:mt-auto">
                    <MoviePosterItem movie={movie_details} className="hidden md:flex w-56 h-80" show_rating={false} />
                    {
                        !isLoading &&
                        <div className="h-full flex flex-col gap-2 md:gap-4 text-white">
                            <div className="border-2 border-white max-w-min px-2 md:px-4 py-1 md:py-2 rounded-lg">
                                <p className="text-lg md:text-2xl font-bold">{movie_details?.vote_average.toFixed(1)}</p>
                            </div>
                            <p className="text-lg md:text-2xl font-semibold">{translations('movies.total-votes', { votes: movie_details?.vote_count })} </p>
                            {/* <p>{movie_details?.popularity}</p> */}
                            <div className="flex flex-col gap-2 my-5 md:my-0">
                                <p className="text-5xl md:text-6xl font-bold">{movie_details?.original_title}</p>
                                <p className="text-2xl md:text-4xl font-semibold">{movie_details?.tagline}</p>
                            </div>
                            {
                                movie_details?.adult && 
                                <p className="text-lg md:text-xl font-semibold">Adult</p>
                            }
                            <p className="text-lg md:text-xl font-semibold">Release date: {movie_details?.release_date.split('-')[0]}</p>
                            <div className="flex flex-col md:flex-row items-start gap-2">
                                <h6 className="text-lg md:text-xl font-semibold mr-2">Languages:</h6>
                                <div className="flex gap-2">
                                    {
                                        movie_details?.spoken_languages.map(item => (
                                            <span className="border-2 border-white px-1.5 py-0.5 rounded-lg">
                                                {item.iso_639_1.toUpperCase()}
                                            </span>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row items-start gap-2">
                                <p className="text-lg md:text-xl font-semibold mr-2">Genres:</p>
                                <div className="flex gap-2">
                                    {
                                        movie_details?.genres.map(genre => (
                                            <span key={genre.id} className="border-2 border-white px-1.5 py-0.5 rounded-lg uppercase">{genre.name}</span>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
            {
                !isLoading &&
                <div className="flex flex-col md:grid md:grid-cols-3 gap-4 px-4 md:px-20 py-10 md:py-20">
                <div className="col-span-2 row-span-4 flex flex-col px-6 py-4 gap-4 bg-slate-800 dark:bg-zinc-800 rounded-lg">
                    <p className="text-xl text-neutral-400">Overview</p>
                    <p className="text-white">{movie_details?.overview}</p>
                </div>
                <div className="col-span-1 flex flex-col px-6 py-4 gap-2 bg-slate-800 dark:bg-zinc-800 rounded-lg">
                    <p className="text-xl text-neutral-400">Details</p>
                    <div>
                        <p className="font-semibold text-lg">Status: <span className="font-normal">{movie_details?.status}</span></p>
                    </div>
                </div>
                <div className="col-span-1 row-span-2 bg-zinc-800 rounded-lg p-4">3</div>
            </div>
            }
            
        </div>
    );
}
