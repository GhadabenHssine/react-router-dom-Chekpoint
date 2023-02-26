
import './App.css';
import { useState } from 'react';

import MovieList from './Component/MovieList/MovieList';
import Filterl from './Component/Filter/Filterl';
import Modal from "./Component/modal/Modal"

import Trailer from './Component/trailler/Trailer';
import { Link, Route, Routes } from "react-router-dom"

function App() {
  const movie = [
    {
      title: "Joker e Harley Quinn",
      description: "Joker e Harley Quinn de Suicide Squad  ...",
      posterURL: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8971ab4e-777c-4897-b797-ddc3448e6bda/dd3psy0-338e175b-e77f-4704-aade-a79b7a73d1c1.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg5NzFhYjRlLTc3N2MtNDg5Ny1iNzk3LWRkYzM0NDhlNmJkYVwvZGQzcHN5MC0zMzhlMTc1Yi1lNzdmLTQ3MDQtYWFkZS1hNzliN2E3M2QxYzEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.qxV1ADFm_Hr6BpCJFsc9SW0e4OliE-vckP_YLJ9Wgvk",
      rating: 5,
      trailerId: "APBuE1w4spM"
    },
    {
      title: " Bojangles",
      description: "Quand Georges rencontre Camille, c’est le coup de...",
      posterURL: "https://jevaisciner.fr/wp/wp-content/uploads/jvc_posters/En%20Attendant%20Bojangles%20Poster.jpg",
      rating: 4,
      trailerId: "VS-4EJnjkkI"
    },

    {
      title: " The lord of the ring",
      description: "Le Seigneur des anneaux est une trilogie cinématographique...  ",
      posterURL: "https://m.media-amazon.com/images/M/MV5BNTg3NjcxYzgtYjljNC00Y2I2LWE3YmMtOTliZTkwYTE1MmZiXkEyXkFqcGdeQXVyNTY4NDc5MDE@._V1_.jpg",
      rating: 3,
      trailerId: "x8UAUAuKNcU"
    },
    {
      title: "  Only the brave",
      description: "En juin 2013, les Granite Mountain Hotshots, une unité de...",
      posterURL: "https://m.media-amazon.com/images/M/MV5BYWFlOWI3YTMtYTk3NS00YWQ2LTlmYTMtZjk0ZDk4Y2NjODI0XkEyXkFqcGdeQXVyNTQxNTQ4Mg@@._V1_.jpg",
      rating: 2,
      trailerId: "EE_GY6zccqc"
    },
    {
      title: "  Silent hill",
      description: "De plus en plus souvent, la petite Sharon rêve d'une ville abandonnée... ",
      posterURL: "https://fr.web.img2.acsta.net/medias/nmedia/18/36/09/80/18479338.jpg",
      rating: 2,
      trailerId: "1mfnhu8sO5k"
    },
    {
      title: "   True sprit",
      description: "Une navigatrice australienne de 16 ans poursuit ses rêves afin de devenir... ",
      posterURL: "  https://m.media-amazon.com/images/M/MV5BZDliNjMwYjktMGI5Zi00OWVkLWJmOWYtNjAxNGI1YzA3MTYxXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_FMjpg_UX1000_.jpg",
      rating: 2,
      trailerId: "UPYD9dw6jmA"
    },
  ]



  const [movies, setMovies] = useState(movie)
  const handleMovie = (mov) => {
    setMovies([...movies, mov])
    console.log(mov)
  }
  console.log(movies)

  const [filterList, setFilterList] = useState("")
  const [rating, setRating] = useState(0)

  return (

    <div className="App">
      <nav>
        <div className="gauche">
          <img src="https://i.ibb.co/XW2vnBh/Netflix-logo.png" alt="logo" height="40" />
          <div className="ongles">

            <Link to={"/"} style={{ color: "white", textDecoration: "none", padding: "10px" }} >MovieList</Link>



          </div>
        </div>
        <div className="droit">

          <Link to={"/addMovie"} style={{ color: "white", textDecoration: "none" }} >add Movie</Link>

        </div>
      </nav>

      <Routes>
        <Route path='/Trailer' element={<Trailer movies={movies} />} />
        <Route path='/' element={<MovieList movie={movies} filterList={filterList} rating={rating} setFilterList={setFilterList} setRating={setRating} />} />
        <Route path='/Trailer/:id' element={<Trailer movies={movies} />} />
        <Route path='/addMovie' element={<Modal handleMovie={handleMovie} />} />







      </Routes>
    </div>
  );
}

export default App;
