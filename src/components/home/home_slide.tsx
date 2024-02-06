import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { useTranslation } from 'react-i18next'
import { useTypewriter } from 'react-simple-typewriter'

import { HomeCarouseItemImage } from '../carousel/home_carouse_Item';
import { Movie } from '../../hooks/types/types';

interface IPops {
    popularesMovies: Movie[] | undefined
}

export const HomeSlider: FC<IPops> = ({ popularesMovies }) => {

    const { t: translation } = useTranslation()

    const [text] = useTypewriter({
        words: [translation('general.movie'), translation('general.serie')],
        loop: false,
        typeSpeed: 150,
        deleteSpeed: 150,
        delaySpeed: 2000
      })

    return (
        <>
            <div className='z-30 absolute top-0 left-0 w-full h-screen bg-black opacity-40'></div>
            <div className='z-30 absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-transparent to-slate-900 dark:to-neutral-900'>
                <div className='w-full h-screen flex flex-col justify-center items-center gap-4 md:gap-6 text-center'>
                    <h1 className='text-4xl md:text-6xl font-bold'>
                        {translation('home_title', {type: text})}
                    </h1>
                    <h1 className='text-2xl md:text-4xl font-semibold'>{translation('home_subtitle')}</h1>
                    
                </div>
            </div>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                effect={'fade'}
                modules={[EffectFade, Autoplay]}
                autoplay={{ delay: 10000, disableOnInteraction: false, }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className='hidden md:flex w-full h-full'
            >
                {
                    popularesMovies?.map(item => (
                        <SwiperSlide key={item.id}>
                            <HomeCarouseItemImage path={`${item.backdrop_path}`} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            {/* MOvile carousel */}
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                effect={'fade'}
                modules={[EffectFade, Autoplay]}
                autoplay={{ delay: 10000, disableOnInteraction: false, }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className='md:hidden w-full h-full'
            >
                {
                    popularesMovies?.map(item => (
                        <SwiperSlide key={item.id}>
                            <HomeCarouseItemImage path={`${item.poster_path}`} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </>
    );
}
