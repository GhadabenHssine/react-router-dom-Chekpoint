
import MovieCart from '../MovieCart/MovieCart'
import style from "./movie.module.css"
import Slick from "../slick/Slick"
import Filterl from '../Filter/Filterl'

const MovieList = ({ movie, filterList, rating, setFilterList, setRating }) => {


    return (

        <div >
            <Filterl setFilterList={setFilterList} setRating={setRating} />
            <div className={style.MovieList}>
                {movie
                    .filter(el => (el.rating >= rating))
                    .filter(car => (car.title.toLowerCase().includes(filterList.toLowerCase().trim())))
                    .map((car, i) =>
                        <MovieCart car={car} key={i} />
                    )}


            </div>
            <Slick />
        </div>
    )
}

export default MovieList