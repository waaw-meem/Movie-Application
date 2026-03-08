import { useState } from "react";
import { MdMovie } from "react-icons/md";
import "./SearchMovie.css";

const SearchMovie = ({ onUserSearch }) => {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!term.trim()) return;
    onUserSearch(term);
  };

  const handleChange = (e) => {
    e.preventDefault()
    setTerm(e.target.value)
  }

  return (
    <div className="search-container">
      <h1 className="app-title">
        <MdMovie className="movie-icon" /> Movie Explorer
      </h1>

      <form onSubmit={handleSubmit} className="search-form">

        <input
          type="text"
          className="search-input"
          placeholder="Search for movies..."
          value={term}
          onChange={handleChange}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchMovie;