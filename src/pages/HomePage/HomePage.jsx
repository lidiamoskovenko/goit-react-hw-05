import { useState, useEffect } from 'react';
import { fetchTrends } from '../../Api';
import { MovieList } from '../../components/MovieList/MovieList';
import {ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';
import css from './HomePage.module.css';

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchTrends();
        setFilms(response.results); 
      } catch (error) {
         setError(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2 className={css.title}>In Trend today</h2>
      {error && <ErrorMessage />}
      {films.length > 0 && <MovieList films={films} />}
    </div>
  );
};

export default HomePage;


