import { Link } from "react-router-dom";
import { ArrowBackOutlined } from "@material-ui/icons";
import ReactPlayer  from "react-player/youtube";
import { useLocation } from "react-router-dom";
import "./Watch.scss";

export default function Watch() {
  const location = useLocation()
  const movie = location.movie;
  return (
    <div className="watch">
      <Link to="/">       
      <div className="back">
        <ArrowBackOutlined />
        Home
        </div>
        </Link>
      <ReactPlayer className="video" url={movie.video} playing={true} controls={true} width="100%" height="100%"/>
    </div>
  );
}