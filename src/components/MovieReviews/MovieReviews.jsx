import { fetchFilmsReviews } from '../../Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import css from './MovieReviews.module.css';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReviewsDetails, setMovieReviewsDetails] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchReviewsDetails = async () => {
      try {
        setLoader(true);
        const fetchedReviews = await fetchFilmsReviews(movieId);
        setMovieReviewsDetails(fetchedReviews.results || []);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    fetchReviewsDetails();
  }, [movieId]);

  return (
    <div className={css.container}>
      {loader && <Loader />}
      {error && <ErrorMessage />}
      {!loader && !error && movieReviewsDetails.length === 0 && (
        <p>No reviews found.</p>
      )}
      {movieReviewsDetails.length > 0 && (
        <div>
          <ul>
            {movieReviewsDetails.map(review => (
              <li className={css.item} key={review.id}>
                <h2 className={css.title}> {review.author}</h2>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MovieReviews;