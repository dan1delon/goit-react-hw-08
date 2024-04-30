import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import css from './RegistrationPage.module.css';

const RegistrationPage = () => {
  return (
    <div className={css.wrapperMain}>
      <div className={css.wrapper}>
        <h2 className={css.headline}>Register account</h2>
        <RegistrationForm />
      </div>
    </div>
  );
};

export default RegistrationPage;
