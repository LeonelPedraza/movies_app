import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { MoviePosterItem } from '../carousel/movie_poster_item';
import { Movie, SimilarResult } from '../../hooks/types/types';
import { FC, useRef } from 'react';

import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


interface IProps {
    title: string,
    movies: Movie[] | SimilarResult[] | undefined
}

export const MoviesPosterSlider: FC<IProps> = ({ title, movies }) => {

    const slideRef = useRef<SwiperRef>(null)
    const { t: translations } = useTranslation()

    const handleNext = () => {
        slideRef.current?.swiper.slideNext()
    }
    const handlePrev = () => {
        slideRef.current?.swiper.slidePrev()
    }

    return (
        <div>
            <div className='flex justify-between px-4 md:px-20'>
                <h1 className="text-2xl font-semibold first-letter:uppercase">{title}</h1>
                <Link to="/movies" className='first-letter:uppercase'>{translations('general.view-more')}</Link>
            </div>
            <div className='relative w-full'>
                <Swiper
                    ref={slideRef}
                    modules={[Navigation]}
                    slidesPerView={1}
                    spaceBetween={100}
                    navigation={false}
                    lazyPreloadPrevNext={3}
                    breakpoints={{
                        360: {
                            slidesPerView: 2.1,
                            spaceBetween: 0,
                        },
                        640: {
                            slidesPerView: 4,
                            spaceBetween: 0,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 0,
                        },
                        1024: {
                            slidesPerView: 3.5,
                            spaceBetween: 0,
                        },
                        1280: {
                            slidesPerView: 5,
                            spaceBetween: 0,
                        }
                    }}
                    className='px-10 py-4 mc:ml-2 md:px-20 md:py-8'
                >
                    {
                        movies?.map(item => (
                            <SwiperSlide key={item.id} className='z-30 transition ease-linear cursor-pointer hover:scale-110 hover:z-40' >
                                <MoviePosterItem movie={item} className='w-32 h-44 lg:w-60 lg:h-80'/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div className='absolute top-0 left-0 flex justify-between w-full h-full'>
                    <div
                        onClick={handlePrev}
                        className='relative flex items-center justify-center px-1.5 md:px-4 h-full z-40 backdrop-blur-sm cursor-pointer'>
                        <MdArrowBackIos className="text-lg md:text-2xl " />
                    </div>
                    <div
                        onClick={handleNext}
                        className='relative z-40 flex items-center justify-center h-full px-1 cursor-pointer md:px-4 backdrop-blur-sm'>
                        <MdArrowForwardIos className="text-lg md:text-2xl " />
                    </div>
                </div>
            </div>
        </div>
    );
}
