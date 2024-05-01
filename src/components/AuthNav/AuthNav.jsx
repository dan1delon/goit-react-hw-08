import { NavLink } from 'react-router-dom';

const AuthNav = ({ handleActiveLink }) => {
  return (
    <>
      <NavLink to="/register" className={handleActiveLink}>
        Register
      </NavLink>
      <NavLink to="/login" className={handleActiveLink}>
        Login
      </NavLink>
    </>
  );
};

export default AuthNav;
