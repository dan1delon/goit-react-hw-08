import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import { selectFilteredContacts } from '../../redux/contacts/slice';

import css from './ContactList.module.css';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {Array.isArray(filteredContacts) && filteredContacts.length === 0 && (
        <li>
          <p className={css.paragraph}>There are no contacts here yet.</p>
        </li>
      )}
      {Array.isArray(filteredContacts) &&
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
