import { useLocation } from "react-router-dom";
import { useMovieDetails, useMoviewImages } from "../../hooks/useMovies";
import { ImagesSlider } from "../../components/home/images_slide";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MoviePosterItem } from "../../components/carousel/movie_poster_item";
import { MoviesPosterSlider } from "../../components/sliders/movies_poster_slider";
import { CastPosterSlider } from "../../components/sliders/cast_slider";
import { CrewPosterSlider } from "../../components/sliders/crew_slider";
import { ReviewSlider } from "../../components/sliders/review_slider";

export const MovieDetails = () => {

    const location = useLocation()

    const { movie_details, isLoading } = useMovieDetails({ id: location.state.id })
    const { movie_images, isLoading: images_loading } = useMoviewImages({ id: location.state.id })

    const convertRuntime = (runtimeMinutes: number | undefined) => {
        if (runtimeMinutes != undefined) {
            const hours = Math.floor(runtimeMinutes / 60); // Obtener las horas
            const minutes = runtimeMinutes % 60; // Obtener los minutos restantes
            return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        }
    }

    return (
        <div className="relative tracking-wide">
            {
                images_loading ?
                    <div className="flex items-center justify-center w-full h-screen">
                        <AiOutlineLoading3Quarters className="text-3xl font-bold text-white animate-spin" />
                    </div>
                    :
                    <ImagesSlider
                        landscape_paths={movie_images?.backdrops.slice(0, 20).map(item => item.file_path)}
                        portrait_paths={movie_images?.posters.slice(0, 20).map(item => item.file_path)}
                        delay={6000}
                    />
            }
            <div className="top-0 z-40 flex w-screen px-4 py-4 md:absolute md:h-screen md:px-20 md:py-28">
                <div className="flex flex-col items-center justify-start gap-2 md:flex-row md:gap-8 md:mt-auto">
                    <MoviePosterItem movie={movie_details} className="hidden w-56 md:flex h-80" show_rating={false} />
                    {
                        !isLoading &&
                        <div className="flex flex-col h-full gap-2 text-white md:gap-4">
                            <div className="px-2 py-1 border-2 border-white rounded-lg max-w-min md:px-4 md:py-2">
                                <p className="text-lg font-bold md:text-2xl">{movie_details?.vote_average.toFixed(1)}</p>
                            </div>
                            {/* <p>{movie_details?.popularity}</p> */}
                            <div className="flex flex-col gap-2 my-2 md:my-0">
                                <p className="text-5xl font-bold md:text-6xl">{movie_details?.title}</p>
                                <p className="text-2xl font-semibold md:text-4xl">{movie_details?.tagline}</p>
                            </div>
                            {
                                movie_details?.adult &&
                                <p className="text-lg font-semibold md:text-xl">Adult</p>
                            }
                            <p className="text-lg font-semibold md:text-xl">Release date: {movie_details?.release_date.split('-')[0]}</p>
                            <div className="flex flex-col items-start gap-2 md:flex-row">
                                <h6 className="mr-2 text-lg font-semibold md:text-xl">Languages:</h6>
                                <div className="flex gap-2">
                                    {
                                        movie_details?.spoken_languages.map(item => (
                                            <span key={item.iso_639_1} className="border-2 border-white px-1.5 py-0.5 rounded-lg">
                                                {item.iso_639_1.toUpperCase()}
                                            </span>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="flex flex-col items-start gap-2 md:flex-row">
                                <p className="mr-2 text-lg font-semibold md:text-xl">Genres:</p>
                                <div className="flex flex-wrap gap-2">
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
                <div className="space-y-12">
                    <div className="flex flex-col gap-4 px-4 py-10 md:grid md:grid-cols-3 md:px-20 md:py-20">
                        <div className="flex flex-col col-span-2 gap-4 px-6 py-4 rounded-lg bg-slate-800 dark:bg-zinc-800">
                            <p className="text-xl text-neutral-400">Overview</p>
                            <p className="text-white">{movie_details?.overview}</p>
                        </div>
                        <div className="flex flex-col col-span-1 gap-2 px-6 py-4 rounded-lg bg-slate-800 dark:bg-zinc-800">
                            <p className="text-xl text-neutral-400">Details</p>
                            <div>
                                <p className="text-lg font-semibold">Status: <span className="font-normal">{movie_details?.status}</span></p>
                                <p className="text-lg font-semibold">Duration: <span className="font-normal">{convertRuntime(movie_details?.runtime)}h</span></p>
                                <p className="text-lg font-semibold">Country: <span className="font-normal">{movie_details?.origin_country.join(', ')}</span></p>
                                <p className="text-lg font-semibold">Original language: <span className="font-normal">{movie_details?.original_language}</span></p>
                                <p className="text-lg font-semibold">Votes: <span className="font-normal">{movie_details?.vote_count}</span></p>
                            </div>
                        </div>
                    </div>
                    <ReviewSlider reviews={movie_details?.reviews.results ?? []} />
                    <CastPosterSlider cast={movie_details?.credits.cast ?? []} />
                    <CrewPosterSlider crew={movie_details?.credits.crew ?? []} />
                    <MoviesPosterSlider title="Similares movies" movies={movie_details?.similar.results} />
                </div>
            }
        </div>
    );
}
