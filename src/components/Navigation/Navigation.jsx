import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = ({ handleActiveLink, children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.wrapper}>
      <div className={clsx({ [css.home]: !isLoggedIn })}>
        <NavLink to="/" className={handleActiveLink}>
          Home
        </NavLink>
      </div>
      {children}
    </nav>
  );
};

export default Navigation;
