import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectUser } from '../../redux/auth/selectors';
import css from './UserMenu.module.css';

const UserMenu = ({ onOpenModal, handleActiveLink }) => {
  const userData = useSelector(selectUser);

  
  return (
    <div className={css.wrapper}>
      <span className={css.welcome}>
        Welcome, <span className={css.name}>{userData.name} 👋🏼</span>
      </span>
      <NavLink to="/contacts" className={handleActiveLink}>
        Contacts
      </NavLink>
      <button type="button" onClick={onOpenModal} className={css.buttonLogout}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
