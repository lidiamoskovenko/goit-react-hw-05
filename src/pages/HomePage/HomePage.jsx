import { useState, useEffect } from 'react';
import { fetchTrends } from '../../Api';
import { Link, useLocation } from 'react-router-dom';
import css from './HomePage.module.css'

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchTrends();
        setFilms(response.results); 
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2 className={css.title}>In Trend today</h2>
      {films.map(film => (
        <Link className={css.container}
          key={film.id}
          to={`/movies/${film.id}`}
          state={{ from: location }}
        >
          <p className={css.link}>{film.title}</p>
          {/* <img src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} alt={film.title} height="600" width="400px"/> */}
        </Link>
      ))}
    </div>
  );
};

export default HomePage;