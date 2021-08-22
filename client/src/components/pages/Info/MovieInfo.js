import { useLocation } from "react-router-dom";
import Navbar from "../../navbar/Navbar";
import ReactPlayer  from "react-player/youtube";
import "./movieInfo.scss"

const MovieInfo = () => {
    const location = useLocation()
    const movie = location.movie;
    console.log(movie);
    return (
        <>
            <Navbar />
            <div className="info__container">   
        <div className="movie__info">
                <h1> {movie?.title}  </h1>
                <p className="info__description">{movie?.desc}</p>
                <p>{movie?.duration}</p>
                <p className="limit">Limit +{movie?.limit}</p>
                <p>Year {movie?.year}</p>
                    <p>Genre {movie?.genre}</p>
                    <ReactPlayer className="video" width="600px" height="300px" url={movie?.trailer}
            playing muted config={{ file: { attributes: { autoPlay: true }}}}/>
                    
                </div>
                <img src={movie?.img} alt="" />

                </div>
            </>
    )
}

export default MovieInfo
