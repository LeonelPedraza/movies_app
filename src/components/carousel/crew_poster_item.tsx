import { FC, useState } from "react";

import { Crew } from "../../hooks/types/types";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import NoImage from '../../assets/img/no-image.webp';

// import { CiStar } from "react-icons/ci";
// import { useNavigate } from "react-router-dom";

const IMAGE_URL = import.meta.env.VITE_IMAGE_URL

interface IProps {
    crew: Crew
    className?: string | undefined
}

export const CrewPosterItem: FC<IProps> = ({ crew, className }) => {

    // const navigate = useNavigate()

    // const handleClick = () => {
    //     navigate(`/movie/${movie?.original_title.toLowerCase().replace(' ', '-')}`, {
    //         state: {
    //             id: movie?.id
    //         }
    //     })
    // }
    const [loadingImage, setLoadingImage] = useState(true)


    return (
        <div className={`relative m-0 rounded-xl overflow-hidden select-none bg-neutral-800 ${className}`}>
            <div className="w-full h-full flex items-center justify-center">
                <AiOutlineLoading3Quarters className="text-3xl text-white font-bold animate-spin" />
            </div>
            {
                loadingImage &&
                <img
                    src={NoImage}
                    alt={crew.original_name}
                    className="absolute top-0 left-0 w-full h-full object-cover border-0"
                    style={{ viewTransitionName: `crew-${crew.id}` }}
                />
            }
            <img
                src={`${IMAGE_URL}${crew.profile_path}`}
                alt={crew.original_name}
                className={`absolute top-0 left-0 w-full h-full object-cover border-0 ${loadingImage ? 'hidden' : ''}`}
                style={{ viewTransitionName: `crew-${crew.id}` }}
                onLoad={() => setLoadingImage(false)}
            />
            <div className='flex flex-col items-start justify-end p-4 z-30 absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent to-slate-900 dark:to-neutral-900'>
                <p className="text-lg font-semibold">{crew.original_name}</p>
                <p className="text-md">{crew.job}</p>
            </div>

        </div>
    );
}
