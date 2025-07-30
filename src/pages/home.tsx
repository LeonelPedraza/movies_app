import { ImagesSlider } from "../components/home/images_slide";
import { useTranslation } from "react-i18next";
import { useTypewriter } from 'react-simple-typewriter'

import { usePopularesMovies, useTopRatedMovies, useUpcomingMovies } from "../hooks/useMovies";
import { MoviesPosterSlider } from "../components/sliders/movies_poster_slider";

const Home = () => {

    const { t: translation } = useTranslation()
    const { data: popularesMovies } = usePopularesMovies()
    const { data: topRatedMovies } = useTopRatedMovies()
    const { data: upcomingMovies } = useUpcomingMovies()

    const [text] = useTypewriter({
        words: [translation('general.movie'), translation('general.serie')],
        loop: false,
        typeSpeed: 150,
        deleteSpeed: 150,
        delaySpeed: 2000
    })

    return (
        <>
            <div>
                <ImagesSlider
                    landscape_paths={popularesMovies?.map(item => item.backdrop_path)}
                    portrait_paths={popularesMovies?.map(item => item.poster_path)}
                    delay={10000}
                />
                <div className='z-30 absolute top-0 left-0 w-full h-screen'>
                    <div className='w-full h-screen flex flex-col justify-center items-center gap-4 md:gap-6 text-center'>
                        <h1 className='text-4xl md:text-6xl font-bold'>
                            {translation('home_title', { type: text })}
                        </h1>
                        <h1 className='text-2xl md:text-4xl font-semibold'>{translation('home_subtitle')}</h1>

                    </div>
                </div>
            </div>
            <div className="flex flex-col py-16 gap-8">
                <MoviesPosterSlider title={translation('movies.populares')} movies={popularesMovies} />
                <MoviesPosterSlider title={translation('movies.top-rated')} movies={topRatedMovies} />
                <MoviesPosterSlider title={translation('movies.upcoming')} movies={upcomingMovies} />
            </div>
        </>
    );
}

export default Home;