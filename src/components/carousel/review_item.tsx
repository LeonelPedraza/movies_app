import { FC, useState } from "react";

import { ReviewsResult } from "../../hooks/types/types";
import NoImage from '../../assets/img/no-image.webp';
// import { CiStar } from "react-icons/ci";
// import { useNavigate } from "react-router-dom";

const IMAGE_URL = import.meta.env.VITE_IMAGE_URL

interface IProps {
    review: ReviewsResult
}

export const ReviewItem: FC<IProps> = ({ review }) => {
    const [loadingImage, setLoadingImage] = useState(true)

    return (
        <div className="flex flex-col gap-4 items-center max-w-md h-max mx-4 p-4 bg-neutral-800 rounded-lg">
            <div>
                {
                    loadingImage &&
                    <img 
                        src={NoImage} 
                        alt={review.author_details.name} 
                        className={`w-20 h-20 rounded-full object-cover border-0`}
                        style={{viewTransitionName: `movie-${review.id}`}}
                    />
                }
                <img 
                    src={`${IMAGE_URL}${review.author_details.avatar_path}`} 
                    alt={review.author_details.name} 
                    className={`w-20 h-20 rounded-full object-cover border-0 ${loadingImage ? 'hidden' : ''}`}
                    style={{viewTransitionName: `movie-${review.id}`}}
                    onLoad={() => setLoadingImage(false)}
                />
            </div>
            <div className='flex flex-col items-center gap-2 w-full'>  
                <h3 className="text-lg font-semibold">{review.author_details.name}</h3>
                <p className="text-sm line-clamp-6">{review.content}</p>
            </div>

        </div>
    );
}
