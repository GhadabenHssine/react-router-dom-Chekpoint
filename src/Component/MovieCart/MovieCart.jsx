import React from 'react'
import style from "./movie.module.css"
import { Rating } from '@mui/material'
import { Link } from 'react-router-dom'


const MovieCart = ({ car }) => {



    return (
        <>
            <Link to={`/Trailer/${car.trailerId}`} style={{ textDecoration: "none" }}>

                <div className={style.bloc}>
                    <p className={style.titre}>{car.title}</p>
                    <img src={car.posterURL} alt="" className={style.img} />
                    <div className={style.desc}>{car.description}</div>
                    <Rating name="read-only" value={car.rating} readOnly className={style.rating} />
                </div >
            </Link>
        </>
    )
}

export default MovieCart