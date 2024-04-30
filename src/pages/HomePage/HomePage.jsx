import { NavLink } from 'react-router-dom';
import css from './HomePage.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

const HomePage = () => {
  const IsLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <div className={css.wrapper}>
        <div className={css.wrapperContent}>
          <h1 className={css.title}>HomePage</h1>
          <p className={css.paragraph}>
            Welcome to PhoneBook, your go-to solution for managing your contacts
            hassle-free! Whether you&apos;re registering for the first time or
            logging in to your account, PhoneBook ensures a seamless experience
            for storing and accessing your valuable contacts. Get ready to
            organize your contacts effortlessly and stay connected like never
            before! I used React.js and Redux to make this app. I&apos;m excited
            for you to give it a try and hope you&apos;ll love it:)
          </p>
        </div>
        <NavLink to={IsLoggedIn ? '/contacts' : '/login'} className={css.btn}>
          Try it now
        </NavLink>
      </div>
      <p className={css.copyright}>© Dan Klymenko | 2024</p>
    </>
  );
};

export default HomePage;
