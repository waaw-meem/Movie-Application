import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaClock } from "react-icons/fa";
import Loader from "../components/Loader";
import { getMovieById } from "../services/api";
import "./MovieDetails.css";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchMovieDetails = async () => {
    setLoading(true);
    const data = await getMovieById(id);
    setMovie(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [id]);

  if (loading) return <Loader />;

  const backdrop = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : `https://via.placeholder.com/1280x720?text=No+Image`;

  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : `https://via.placeholder.com/500x750?text=No+Image`;

  return (
    <div
      className="movie-details-container"
      style={{ backgroundImage: `url(${backdrop})` }}
    >
      <div className="movie-details-overlay"></div>

      <div className="movie-details-content">
        <div className="movie-details-poster-section">
          <img
            src={poster}
            alt={movie.title}
            className="movie-details-poster"
          />
        </div>

        <div className="movie-details-info">
          <h1 className="movie-details-title">{movie.title}</h1>

          <div className="movie-details-meta">
            <span className="rating">
              <FaStar /> {movie.vote_average?.toFixed(1)}
            </span>
            <span className="runtime">
              <FaClock /> {movie.runtime} min
            </span>
            <span className="release-date">{movie.release_date}</span>
          </div>

          <p className="movie-details-overview">{movie.overview}</p>

          <div className="movie-details-additional">
            <p>
              <strong>Genres:</strong>{" "}
              {movie.genres.map((g) => g.name).join(", ")}
            </p>
            <p>
              <strong>Language:</strong> {movie.original_language.toUpperCase()}
            </p>
            <p>
              <strong>Popularity:</strong> {movie.popularity}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;