import { HomeSlider } from "../components/home/home_slide";
import { usePopularesMovies, useTopRatedMovies, useUpcomingMovies } from "../hooks/useMovies";

// import 'swiper/css/virtual';
import { MoviesPosterSlideSection } from "../components/home/movies_poster_slide_section";
import { useTranslation } from "react-i18next";

const Home = () => {

    const { t: translation } = useTranslation()
    const { data: popularesMovies } = usePopularesMovies()
    const { data: topRatedMovies } = useTopRatedMovies()
    const { data: upcomingMovies } = useUpcomingMovies()

    return (
        <>
            <HomeSlider popularesMovies={popularesMovies} />
            <div className="flex flex-col py-16 gap-20">
                <MoviesPosterSlideSection title={translation('movies.populares')} movies={popularesMovies} />
                <MoviesPosterSlideSection title={translation('movies.top-rated')} movies={topRatedMovies} />
                <MoviesPosterSlideSection title={translation('movies.upcoming')} movies={upcomingMovies} />
            </div>
        </>
    );
}

export default Home;