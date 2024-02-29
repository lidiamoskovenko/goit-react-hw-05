import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { fetchData } from '../../Api';
import { Loader } from '../../components/Loader/Loader';
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';
import { MovieList } from '../../components/MovieList/MovieList';

export default function MoviesPage() {
  const [searchFilm, setSearchFilm] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const NameMovie = searchParams.get('query') ?? '';
  

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
      <SearchBar value={NameMovie} onSearch={searchMovies} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {searchFilm.length >0 && <MovieList films={searchFilm} />}
    </>
  );
}


