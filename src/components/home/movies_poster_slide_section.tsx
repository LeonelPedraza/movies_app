import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Virtual } from 'swiper/modules';
import { MoviePosterItem } from '../carousel/movie_poster_item';
import { Movie } from '../../hooks/types/types';
import { FC } from 'react';

interface IProps {
    title: string,
    movies: Movie[] | undefined
}

export const MoviesPosterSlideSection: FC<IProps> = ({ title, movies }) => {
    return (
        <div className="flex flex-col gap-8">
                    <div className='px-4 md:px-20'>
                        <h1 className="text-2xl font-semibold first-letter:uppercase">{title}</h1>
                    </div>
                    <div>
                        <Swiper
                            modules={[Virtual, Navigation]}
                            slidesPerView={1}
                            spaceBetween={-100}
                            navigation={true}
                            virtual
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
                            className='px-8 md:px-20 relative'
                        >
                            {
                                movies?.map(item => (
                                    <SwiperSlide key={item.id}>
                                        <MoviePosterItem movie={item} />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
    );
}
