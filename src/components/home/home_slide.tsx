import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

import { HomeCarouseItemImage } from '../carousel/home_carouse_Item';

interface IPops {
    landscape_paths: string[] | undefined
    portrait_paths: string[] | undefined,
    delay: number
}

export const ImagesSlider: FC<IPops> = ({ landscape_paths, portrait_paths, delay }) => {

    

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div className='z-30 absolute top-0 left-0 w-full h-screen bg-black opacity-40'></div>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                effect={'fade'}
                modules={[EffectFade, Autoplay]}
                autoplay={{ delay, disableOnInteraction: false, }}
                className='hidden md:flex w-full h-full'
            >
                {
                    landscape_paths?.map(item => (
                        <SwiperSlide key={item}>
                            <HomeCarouseItemImage path={`${item}`} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            {/* Movile carousel */}
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
                    portrait_paths?.map(item => (
                        <SwiperSlide key={item}>
                            <HomeCarouseItemImage path={`${item}`} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </div>
    );
}
