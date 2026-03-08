import { useNavigate } from "react-router-dom";
import "./MovieShow.css";
import { FaStar } from "react-icons/fa";

const MovieShow = ({ list }) => {
  const navigate = useNavigate();

  const poster = list.poster_path
    ? `https://image.tmdb.org/t/p/w500${list.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";

  const year = list.release_date ? list.release_date.substring(0, 4) : "N/A";

  const handleClick = () => {
    navigate(`/movie/${list.id}`);
  };

  return (
    <div className="movie-card" onClick={handleClick}>
      <div className="poster-wrapper">
        <img src={poster} alt={list.title} className="movie-poster" />
        <div className="rating-badge">
          <FaStar className="star-icon" /> {list.vote_average?.toFixed(1)}
        </div>
      </div>

      <div className="movie-info">
        <h3 className="movie-title">{list.title}</h3>
        <p className="movie-year">{year}</p>
      </div>
    </div>
  );
};

export default MovieShow;