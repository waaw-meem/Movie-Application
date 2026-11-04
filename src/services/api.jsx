import axios from "axios";

const API_KEY = "38beae34573252d94faea2558133dcd3";
const BASE_URL = "https://api.themoviedb.org/3";

export const searchMoviesAPI = async (term) => {
  try {
    const res = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query: term,
      },
    });
    return res.data.results;
  } catch (error) {
    console.error("Error fetching search results:", error);
    return [];
  }
};

export const getMovieById = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/movie/${id}`, {
      params: { api_key: API_KEY },
    });
    return res.data;
  } catch (error) {
    console.error(`Error fetching movie details for ID ${id}:`, error);
    return null;
  }
};


// GET POPULAR MOVIES API FUNCTION
export const getPopularMovies = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/movie/popular`, {
      params: { api_key: API_KEY, page: 1 },
    });
    return res.data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
};