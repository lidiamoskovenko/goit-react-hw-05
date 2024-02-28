import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { fetchData } from '../../Api';
import { Loader } from '../../components/Loader/Loader';
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';

export default function MoviesPage() {
  const [searchFilm, setSearchFilm] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const movie = searchParams.get('query') ?? '';
  const location = useLocation();

  const searchMovies = async query => {
    try {
      setLoading(true);
      const result = await fetchData(query);
      setSearchFilm(result.results);
      const nextParams = query !== '' ? { query } : {};
      setSearchParams(nextParams);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SearchBar value={movie} onSearch={searchMovies} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {searchFilm ? (
  <div>
    {searchFilm.map(movie => (
      <Link key={movie.id} to={`${movie.id}`} state={{ from: location }}>
        <li>{movie.title}</li>
      </Link>
    ))}
  </div>
) : (
  <p>Not found</p>
)}
    </>
  );
}