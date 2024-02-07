import { FC } from "react";
import { Movie } from "../../hooks/types/types";

const IMAGE_URL = import.meta.env.VITE_IMAGE_URL

interface IProps {
    movie: Movie
}

export const MoviePosterItem: FC<IProps> = ({ movie }) => {
    return (
        <div className="w-60 h-80 rounded-xl overflow-hidden select-none">
            <img src={`${IMAGE_URL}${movie.poster_path}`} alt={movie.original_title} className="w-full h-full object-cover" />
        </div>
    );
}
