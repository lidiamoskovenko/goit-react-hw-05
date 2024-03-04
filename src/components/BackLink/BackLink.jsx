import { VscArrowLeft } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import css from './BackLink.module.css'

export const BackLink = ({ to, children }) => {
  return (
    <Link to={to} className={css.link}>
      <VscArrowLeft size="24" />
      {children}
    </Link>
  );
};