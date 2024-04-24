import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import { selectFilteredContacts } from '../../redux/contactsSlice';

import css from './ContactList.module.css';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {filteredContacts &&
        filteredContacts.map(contact => {
          return (
            <li key={contact.id} className={css.listItem}>
              <ContactItem contact={contact} />
            </li>
          );
        })}
    </ul>
  );
};

export default ContactList;
