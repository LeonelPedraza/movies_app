import { FC } from "react";

const IMAGE_URL = import.meta.env.VITE_IMAGE_URL

interface IProps {
    path: string
}

export const HomeCarouseItemImage: FC<IProps> = ({ path }) => {
    return (
        <img src={`${IMAGE_URL}${path}`} alt="" loading="lazy" className="w-full h-full object-scale-cover" />
    );
}
