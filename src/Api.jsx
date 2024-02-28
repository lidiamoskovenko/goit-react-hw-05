
import axios from 'axios';

const MY_KEY = 'd5ad0420f2feaa8b1eccb8bb81369c46';

export const fetchData = async query => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;

  const options = {
    params: {
      api_key: MY_KEY,
    },
  };

  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error("Sorry, films don't found.");
    throw error;
  }
};

export const fetchTrends = async () => {
  const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

  const options = {
    params: {
      api_key: MY_KEY,
    },
  };

  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error("Oops! Something went wrong");
    throw error;
  }
};

export const fetchFilmById = async movieId => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;

  const options = {
    params: {
      api_key: MY_KEY,
    },
  };

  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error("This film don't found.");
    throw error;
  }
};

export const fetchFilmsCast = async movieId => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;

  const options = {
    params: {
      api_key: MY_KEY,
    },
  };

  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error("Error");
    throw error;
  }
};

export const fetchFilmsReviews = async movieId => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;

  const options = {
    params: {
      api_key: MY_KEY,
    },
  };

  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error("Error");
    throw error;
  }
};