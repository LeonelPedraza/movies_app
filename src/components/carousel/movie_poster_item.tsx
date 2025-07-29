import { FC } from "react";

import { Movie, SimilarResult } from "../../hooks/types/types";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { CiStar } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const IMAGE_URL = import.meta.env.VITE_IMAGE_URL

interface IProps {
    movie: Movie | SimilarResult | undefined,
    className?: string | undefined
    show_rating?: boolean
}

export const MoviePosterItem: FC<IProps> = ({ movie, show_rating = true, className }) => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/movie/${movie?.original_title.toLowerCase().replace(' ', '-')}`, {
            state: {
                id: movie?.id
            }
        })
    }

    return (
        <div onClick={handleClick} className={`relative m-0 rounded-xl overflow-hidden select-none bg-neutral-800 ${className}`}>
            <div className="w-full h-full flex items-center justify-center">
                <AiOutlineLoading3Quarters className="text-3xl text-white font-bold animate-spin" />
            </div>
            <img 
                src={`${IMAGE_URL}${movie?.poster_path}`} 
                alt={movie?.original_title} 
                className="absolute top-0 left-0 w-full h-full object-cover border-0"
                style={{viewTransitionName: `movie-${movie?.id}`}}
            />
            {
                show_rating &&
                <div className="absolute flex items-center gap-2 top-0 left-0 bg-gray-600 opacity-85 text-white px-1.5 md:px-2 py-1.5 md:py-2 rounded-br-lg text-xs md:text-md">
                    <CiStar/>
                    <span>{movie?.vote_average.toFixed(2)}</span>
                </div>
            }
        </div>
    );
}
