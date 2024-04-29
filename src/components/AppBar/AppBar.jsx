import { selectIsLoggedIn, selectUser } from '../../redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import css from './AppBar.module.css';
import clsx from 'clsx';

const handleActiveLink = ({ isActive }) => {
  return clsx(css.link, { [css.active]: isActive });
};

const AppBar = ({ onOpenModal }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userData = useSelector(selectUser);

  return (
    <header>
      <nav className={css.wrapper}>
        <NavLink to="/" className={handleActiveLink}>
          Home
        </NavLink>
        {isLoggedIn ? (
          <>
            <NavLink to="/contacts" className={handleActiveLink}>
              Contacts
            </NavLink>
            <div>
              <span>Welcome, {userData.name}</span>
              <button type="button" onClick={onOpenModal}>
                Logout
              </button>
            </div>
          </>
        ) : (
          <>
            <NavLink to="/register" className={handleActiveLink}>
              Register
            </NavLink>
            <NavLink to="/login" className={handleActiveLink}>
              Login
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default AppBar;
