import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import css from './LoginForm.module.css';
import { loginAPI } from '../../redux/auth/operations';

const initialFormValues = {
  email: '',
  password: '',
};

const formValidation = Yup.object({
  email: Yup.string('You must enter a valid email!')
    .trim()
    .min(3, 'Too short!')
    .max(30, 'Too long!')
    .required('Email is required!'),
  password: Yup.string('You must enter a valid password!')
    .min(8, 'Too short!')
    .max(50, 'Too long!')
    .required('Password is required!'),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(loginAPI(values));
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
          Log in
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
