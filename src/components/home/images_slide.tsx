import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

import { ItemImage } from '../carousel/Item_image';

interface IPops {
    landscape_paths: string[] | undefined
    portrait_paths: string[] | undefined,
    delay: number
}

export const ImagesSlider: FC<IPops> = ({ landscape_paths, portrait_paths, delay }) => {

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-black opacity-45">
            <div className='z-30 absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-transparent to-slate-900 dark:to-neutral-900'></div>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                effect={'fade'}
                lazyPreloadPrevNext={3}
                // lazyPreloaderClass='swiper-lazy-preloader-white'
                modules={[EffectFade, Autoplay]}
                autoplay={{ delay, disableOnInteraction: false, }}
                className='hidden md:flex w-full h-full'
            >
                {
                    landscape_paths?.map(item => {
                        console.log(item)
                        return (
                        <SwiperSlide key={item}>
                            <ItemImage path={`${item}`} />
                        </SwiperSlide>
                    )})
                }
            </Swiper>
            {/* Movile carousel */}
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                effect={'fade'}
                modules={[EffectFade, Autoplay]}
                lazyPreloadPrevNext={2}
                autoplay={{ delay: 10000, disableOnInteraction: false, }}
                className='md:hidden w-full h-full'
            >
                {
                    portrait_paths?.map(item => (
                        <SwiperSlide key={item}>
                            <ItemImage path={`${item}`} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </div>
    );
}
