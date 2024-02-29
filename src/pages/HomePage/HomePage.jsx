import { useState, useEffect } from 'react';
import { fetchTrends } from '../../Api';
import { MovieList } from '../../components/MovieList/MovieList';
import {ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';
import { Loader } from '../../components/Loader/Loader';
import css from './HomePage.module.css';
// import { useLocation } from 'react-router-dom';


const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetchTrends();
        setFilms(response.results); 
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };  
    fetchData();
  }, []);

  return (
    <div>
      <h2 className={css.title}>In Trend today</h2>
      {error && <ErrorMessage />}
      {loading && <Loader/>}
      {films.length > 0 && <MovieList films={films} />}
    </div>
  );
};

export default HomePage;


