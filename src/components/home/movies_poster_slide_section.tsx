import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { MoviePosterItem } from '../carousel/movie_poster_item';
import { Movie } from '../../hooks/types/types';
import { FC, useRef } from 'react';

import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


interface IProps {
    title: string,
    movies: Movie[] | undefined
}

export const MoviesPosterSlideSection: FC<IProps> = ({ title, movies }) => {

    const slideRef = useRef<SwiperRef>(null)
    const { t: translations } = useTranslation()

    const handleNext = () => {
        slideRef.current?.swiper.slideNext()
    }
    const handlePrev = () => {
        slideRef.current?.swiper.slidePrev()
    }

    return (
        <div className="flex flex-col">
            <div className='flex justify-between px-4 md:px-20'>
                <h1 className="text-2xl font-semibold first-letter:uppercase">{title}</h1>
                <Link to="/movies" className='first-letter:uppercase'>{translations('general.view-more')}</Link>
            </div>
            <div className='relative'>
                <Swiper
                    ref={slideRef}
                    modules={[Navigation]}
                    slidesPerView={1}
                    spaceBetween={0}
                    navigation={false}
                    lazyPreloadPrevNext={3}
                    breakpoints={{
                        360: {
                            slidesPerView: 1.1,
                            spaceBetween: 0,
                        },
                        640: {
                            slidesPerView: 2.2,
                            spaceBetween: 0,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 0,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 0,
                        },
                        1280: {
                            slidesPerView: 4.5,
                            spaceBetween: 0,
                        },
                        1536: {
                            slidesPerView: 5,
                            spaceBetween: 0,
                        },
                    }}
                    className='ml-2 px-10 md:px-20 py-16'
                >
                    {
                        movies?.map(item => (
                            <SwiperSlide key={item.id} className='overflow-visible hover:scale-125 hover:z-40 z-30 transition ease-linear cursor-pointer' >
                                <MoviePosterItem movie={item} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div className='absolute flex justify-between w-full h-full top-0 left-0'>
                    <div
                        onClick={handlePrev}
                        className='relative flex items-center justify-center px-2 md:px-4 h-full z-40 backdrop-blur-sm cursor-pointer'>
                        <MdArrowBackIos className="text-xl md:text-2xl " />
                    </div>
                    <div
                        onClick={handleNext}
                        className='relative flex items-center justify-center px-2 md:px-4 h-full z-40 backdrop-blur-sm cursor-pointer'>
                        <MdArrowForwardIos className="text-xl md:text-2xl " />
                    </div>
                </div>
            </div>
        </div>
    );
}
