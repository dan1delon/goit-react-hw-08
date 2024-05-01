import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import css from './AppBar.module.css';
import clsx from 'clsx';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import Navigation from '../Navigation/Navigation';

const handleActiveLink = ({ isActive }) => {
  return clsx(css.link, { [css.active]: isActive });
};

const AppBar = ({ onOpenModal }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.wrapperMain}>
      <Navigation handleActiveLink={handleActiveLink}>
        {isLoggedIn ? (
          <UserMenu
            onOpenModal={onOpenModal}
            handleActiveLink={handleActiveLink}
          />
        ) : (
          <AuthNav handleActiveLink={handleActiveLink} />
        )}
      </Navigation>
    </header>
  );
};

export default AppBar;
