import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Crew } from '../../hooks/types/types';
import { FC, useRef } from 'react';

import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

import 'swiper/css';
import 'swiper/css/navigation';
import { CrewPosterItem } from '../carousel/crew_poster_item';

interface IProps {
    crew: Crew[]
}

export const CrewPosterSlider: FC<IProps> = ({ crew }) => {

    const slideRef = useRef<SwiperRef>(null)

    const handleNext = () => {
        slideRef.current?.swiper.slideNext()
    }
    const handlePrev = () => {
        slideRef.current?.swiper.slidePrev()
    }

    return (
        <div className="flex flex-col">
            <div className='flex justify-between px-4 md:px-20'>
                <h1 className="text-2xl font-semibold first-letter:uppercase">Crew</h1>
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
                    className='mc:ml-2 px-10 md:px-20 py-4 md:py-8'
                >
                    {
                        crew?.map(item => (
                            <SwiperSlide key={item.id} className='overflow-visible hover:scale-110 hover:z-40 z-30 transition ease-linear cursor-pointer' >
                                <CrewPosterItem crew={item} className='w-32 h-44 lg:w-60 lg:h-80'/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div className='absolute flex justify-between w-full h-full top-0 left-0'>
                    <div
                        onClick={handlePrev}
                        className='relative flex items-center justify-center px-1.5 md:px-4 h-full z-40 backdrop-blur-sm cursor-pointer'>
                        <MdArrowBackIos className="text-lg md:text-2xl " />
                    </div>
                    <div
                        onClick={handleNext}
                        className='relative flex items-center justify-center px-1 md:px-4 h-full z-40 backdrop-blur-sm cursor-pointer'>
                        <MdArrowForwardIos className="text-lg md:text-2xl " />
                    </div>
                </div>
            </div>
        </div>
    );
}
