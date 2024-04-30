import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import Loader from '../../components/Loader/Loader';
import ContactList from '../../components/ContactList/ContactList';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
} from '../../redux/contacts/contactsSelectors';
import css from './ContactsPage.module.css';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import { Toaster } from 'react-hot-toast';

const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className={css.wrapper}>
        <h1 className={css.title}>Phone book</h1>
        <ContactForm />
        <SearchBox />
        {error && <ErrorMessage />}
        {isLoading && <Loader />}
        <ContactList />
      </div>
      <p className={css.copyright}>© Dan Klymenko | 2024</p>
    </>
  );
};

export default ContactsPage;
