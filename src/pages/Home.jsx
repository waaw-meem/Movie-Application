import { useState, useEffect } from "react";
import { searchMoviesAPI, getPopularMovies } from "../services/api";
import MovieList from "../components/MovieList";
import Loader from "../components/Loader";
import SearchMovie from "../components/SearchMovie";
import "./Home.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPopular = async () => {
      const popular = await getPopularMovies();
      setMovies(popular);
      setLoading(false);
    };
    fetchPopular();
  }, []);

  const handleSearch = async (term) => {

    setLoading(true);
    const results = await searchMoviesAPI(term);
    setMovies(results);
    setLoading(false);
  };

  return (
    <div className="home">
      <SearchMovie onUserSearch={handleSearch} />
      {loading ? <Loader /> : <MovieList lists={movies} />}
    </div>
  );
};

export default Home;