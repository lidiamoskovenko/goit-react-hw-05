import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export const MovieList = ({ films }) => {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {films.map((film) => (
        <li className={css.link} key={film.id}>
          <Link
            className={css.link}
            to={`/movies/${film.id}`}
            state={location}
          >
            {film.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};