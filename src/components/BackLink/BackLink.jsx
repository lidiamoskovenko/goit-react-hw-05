import { VscArrowLeft } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import css from './BackLink.module.css'

export const BackLink = ({to, children}) => {
  return (
    <div className={css.container}>
      <Link className={css.link} to={to}>
        <VscArrowLeft size="20" />
        <span className={css.span}> {children}</span>
      </Link>
    </div>
  );
};
