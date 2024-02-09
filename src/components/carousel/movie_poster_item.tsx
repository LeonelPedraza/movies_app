import { FC } from "react";

import { Movie } from "../../hooks/types/types";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { CiStar } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const IMAGE_URL = import.meta.env.VITE_IMAGE_URL

interface IProps {
    movie: Movie
}

export const MoviePosterItem: FC<IProps> = ({ movie }) => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/movie/${movie.original_title.toLowerCase().replace(' ', '-')}`, {
            state: {
                id: movie.id
            }
        })
    }

    return (
        <div onClick={handleClick} className="relative w-60 h-80 m-0 rounded-xl overflow-hidden select-none bg-neutral-800">
            <div className="w-full h-full flex items-center justify-center">
                <AiOutlineLoading3Quarters className="text-3xl text-white font-bold animate-spin" />
            </div>
            <img src={`${IMAGE_URL}${movie.poster_path}`} alt={movie.original_title} className="absolute top-0 left-0 w-full h-full object-cover" />
            <div className="absolute flex items-center gap-2 top-0 left-0 bg-gray-600 opacity-85 text-white px-2 py-2 text-sm rounded-br-lg">
                <CiStar className="text-md"/>
                <span>{movie.vote_average.toFixed(2)}</span>
            </div>
        </div>
    );
}
