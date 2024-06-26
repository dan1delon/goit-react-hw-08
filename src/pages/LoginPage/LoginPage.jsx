import LoginForm from '../../components/LoginForm/LoginForm';
import css from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <div className={css.wrapperMain}>
      <div className={css.wrapper}>
        <h2 className={css.headline}>Login to your account</h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
