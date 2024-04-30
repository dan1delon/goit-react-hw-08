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
    <header className={css.wrapperMain}>
      <nav className={css.wrapper}>
        <div className={clsx({ [css.home]: !isLoggedIn })}>
          <NavLink to="/" className={handleActiveLink}>
            Home
          </NavLink>
        </div>
        {isLoggedIn ? (
          <>
            <NavLink to="/contacts" className={handleActiveLink}>
              Contacts
            </NavLink>
            <div className={css.welcomeWrap}>
              <span className={css.welcome}>
                Welcome, <span className={css.name}>{userData.name}</span>
              </span>
              <button
                type="button"
                onClick={onOpenModal}
                className={css.buttonLogout}
              >
                Log out
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
