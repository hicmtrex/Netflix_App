import { PlayArrow, Add, ThumbUpAltOutlined, ThumbDownOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import ReactPlayer  from "react-player/youtube";
import axiosInstance from "../../config";
import { Link } from "react-router-dom";
import "./listItem.scss";


 function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {

    const getMovie = async () => {
      try {                            
        const res = await axiosInstance.get(`movies/find/${item}`, {
          headers: {
            token:
            "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
      
        setMovie(res.data);
         
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
   
  }, [item]);
   
  return (
    <Link to={{ pathname: "/watch", movie: movie }}>
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie?.imgSm} alt="" />
        {isHovered && (
          <>
            <ReactPlayer className="video" width="100%" height="200px" url={movie?.trailer}
            playing muted config={{ file: { attributes: { autoPlay: true }}}}/>
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie?.duration}</span>
                <span className="limit">+{movie?.limit}</span>
                <span>{movie?.year}</span>
              </div>
              <div className="desc">{movie?.desc}</div>
              <div className="genre">{movie?.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}

export default ListItem;