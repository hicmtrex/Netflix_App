import axiosInstance from "../../config"
import { PlayArrow,InfoOutlined } from "@material-ui/icons"
import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
import "./featured.scss"



const Featured = ({ type ,setGenre}) => {
    const [content, setContent] = useState({});
     
    useEffect(() => {
      const getRandomContent = async () => {
        try {
          const res = await axiosInstance.get(`/movies/random?type=${type}`, {
            headers: {
                token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMWIwNDZiODQ3OTBjNDM0MDAxYjgzMSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MjkxNjA1NzYsImV4cCI6MTYyOTU5MjU3Nn0.syScIkAPzNNGlvlKQNmTcowt0CdnxZ6xzgILFDcHEms ",
              },
          });
          setContent(res.data[0]);
        } catch (err) {
          console.log(err);
        }
      };
      getRandomContent();
    }, [type]);
    return (
      <div className="featured">
        {type && (
          <div className="category">
            <span>{type === "movies" ? "Movies" : "Series"}</span>
            <select name="genre" id="genre" onChange={e => setGenre(e.target.value)} >
              <option>Genre</option>
              <option value="comedy">Comedy</option>
              <option value="crime">Crime</option>
              <option value="horror">Horror</option>
              <option value="romance">Romance</option>
              <option value="Mystery">Mystery</option>
              <option value="thriller">Thriller</option>
              <option value="drama">Drama</option>
              {/* <option value="historical">Historical</option>
                <option value="western">Western</option>
                <option value="fantasy">Fantasy</option>
             <option value="animation">Animation</option>
              <option value="documentary">Documentary</option>
              <option value="adventure">Adventure</option> */}
            </select>
          </div>
        )}
        <img src={content.img} alt="" />
        <div className="info">
         {/* <img src={content.imgTitle} alt="" /> */}
          <h1 className="movie__title">{content.title}</h1>
          <span className="desc">{content.desc}</span>
          <div className="buttons">
            <button className="play" to="watch">
            <Link to={{ pathname: "/watch", movie: content }}>
              <PlayArrow />
                <span>Play</span>
                </Link>
            </button>
            <button className="more">
            <Link className="more" to={{ pathname: "/info", movie: content }}>
              <InfoOutlined />
                <span>Info</span>
                </Link>
            </button>
          </div>
        </div>
      </div>
    );
}

export default Featured
