import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import YouTube from 'react-youtube';

import style from "./trailer.module.css"
const Trailer = ({ movies }) => {

    console.log(movies)
    const params = useParams();
    const navigate = useNavigate();
    const movie = movies.find((movie) => movie.trailerId === params.id)
    const opts = {
        height: '590',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        }
    }
    const onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();

    }

    return (
        <div className={style.bg}>

            <YouTube videoId={movie.trailerId} opts={opts} onReady={onReady} />;
            <div className={style.center}>
                <button className={style.back} onClick={() => { navigate("/") }}>Go Back</button>
            </div>


        </div >
    )
}

export default Trailer