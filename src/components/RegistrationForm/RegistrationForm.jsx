import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import css from './RegistrationForm.module.css';
import { registerAPI } from '../../redux/auth/authOps';
import { useDispatch } from 'react-redux';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
};

const formValidation = Yup.object({
  name: Yup.string('You must enter a valid name!')
    .trim()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Name is required!'),
  email: Yup.string('You must enter a valid email!')
    .trim()
    .min(3, 'Too short!')
    .max(30, 'Too long!')
    .required('Email is required!'),
  password: Yup.string('You must enter a valid password!')
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Password is required!'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(registerAPI(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialFormValues}
      validationSchema={formValidation}
      onSubmit={handleSubmit}
    >
      <Form className={css.container}>
        <label className={css.labelWrapper}>
          <span className={css.label}>Name: </span>
          <Field type="text" name="name" className={css.input} />
          <ErrorMessage component="p" name="name" className={css.error} />
        </label>
        <label className={css.labelWrapper}>
          <span className={css.label}>Email: </span>
          <Field type="email" name="email" className={css.input} />
          <ErrorMessage component="p" name="email" className={css.error} />
        </label>
        <label className={css.labelWrapper}>
          <span className={css.label}>Password: </span>
          <Field type="password" name="password" className={css.input} />
          <ErrorMessage component="p" name="password" className={css.error} />
        </label>
        <button type="submit" className={css.btn}>
          Sign up
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
