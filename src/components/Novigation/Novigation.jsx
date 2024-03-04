import { NavLink } from 'react-router-dom';
import css from './Novigation.module.css'
import clsx from 'clsx';


const buildLinkClass = ({ isActive }) => {
  return clsx (css.link, isActive && css.active);
};
export const Novigation = () => {
    return (
     <div>
        <nav className={css.nav}>
            <NavLink to="/" className={buildLinkClass}>
            Home
            </NavLink>
            <NavLink to="/movies" className={buildLinkClass}>
            Movies
            </NavLink>        
        </nav>
    </div>
    )
}