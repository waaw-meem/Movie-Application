import MovieShow from "./MovieShow";
import "./MovieList.css";

const MovieList = ({ lists }) => {

  const renderedMovies = lists?.map((list) => {
  return <MovieShow key={list.id} list={list} />;
});

  return (
    <div className="movie-section">

      {lists.length === 0 ? (
        <div className="empty-state">
          <h2>No movies found</h2>
          <p>Search your favorite movies above 🎬</p>
        </div>
      ) : (
        <div className="movie-grid">
          {renderedMovies}
        </div>
      )}

    </div>
  );
};

export default MovieList;