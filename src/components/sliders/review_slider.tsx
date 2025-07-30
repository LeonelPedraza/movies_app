import { FC, useRef } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { ReviewsResult } from '../../hooks/types/types';
import { ReviewItem } from '../carousel/review_item';

import 'swiper/css';
import 'swiper/css/navigation';

interface IProps {
    reviews: ReviewsResult[]
}

export const ReviewSlider: FC<IProps> = ({ reviews }) => {

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
                <h1 className="text-2xl font-semibold first-letter:uppercase">Reviews</h1>
            </div>
            <div className='relative'>
                <Swiper
                    ref={slideRef}
                    modules={[Navigation]}
                    slidesPerView={3}
                    spaceBetween={0}
                    navigation={false}
                    lazyPreloadPrevNext={3}
                    breakpoints={{
                        360: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 0,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 0,
                        },
                        1280: {
                            slidesPerView: 3,
                            spaceBetween: 0,
                        }
                    }}
                    className='px-10 md:px-20 py-4 md:py-8'
                >
                    {
                        reviews.map(item => (
                            <SwiperSlide key={item.id} className='overflow-visible cursor-pointer' >
                                <ReviewItem review={item}/>
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
