import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import css from './RegistrationPage.module.css';

const RegistrationPage = () => {
  return (
    <div className={css.wrapper}>
      <h2 className={css.headline}>Register a new account</h2>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
