import { useLocation } from "react-router-dom";
import { useMovieDetails, useMoviewImages } from "../../hooks/useMovies";
import { ImagesSlider } from "../../components/home/home_slide";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const MovieDetails = () => {

    const location = useLocation()

    const { movie_details, isLoading, isError } = useMovieDetails({ id: location.state.id })
    const { movie_images, isLoading: images_loading, isError: images_error } = useMoviewImages({ id: location.state.id })

    return (
        <div>
            {
                images_loading ?
                    <div className="w-full h-screen flex items-center justify-center">
                        <AiOutlineLoading3Quarters className="text-3xl text-white font-bold animate-spin" />
                    </div>
                    :
                    <ImagesSlider
                        landscape_paths={movie_images?.backdrops.map(item => item.file_path)}
                        portrait_paths={movie_images?.posters.map(item => item.file_path)}
                        delay={6000}
                    />
            }
        </div>
    );
}
