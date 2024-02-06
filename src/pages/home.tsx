import { HomeSlider } from "../components/home/home_slide";
import { usePopularesMovies } from "../hooks/useMovies";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/virtual';
import { MoviesPosterSlideSection } from "../components/home/movies_poster_slide_section";
import { useTranslation } from "react-i18next";

const Home = () => {

    const { t: translation } = useTranslation()
    const { data: movies } = usePopularesMovies()

    return (
        <>
            <div className="w-screen h-screen flex items-center justify-center">
                <HomeSlider popularesMovies={movies} />
            </div>
            <div className="py-16 ">
                <MoviesPosterSlideSection title={translation('populares')} movies={movies} />
            </div>
        </>
    );
}

export default Home;