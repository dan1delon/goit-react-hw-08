import toast from 'react-hot-toast';
import { deleteContact } from '../../redux/contacts/operations';
import css from './ContactItem.module.css';
import { useDispatch } from 'react-redux';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const onDelete = id => {
    const action = deleteContact(id);
    dispatch(action);
    toast('Successfully deleted!', {
      icon: '🔥',
    });
  };

  return (
    <>
      <div className={css.wrapper}>
        <p className={css.text}>{contact.name}</p>
        <p className={css.text}>{contact.number}</p>
      </div>
      <button
        type="button"
        onClick={() => onDelete(contact.id)}
        className={css.btn}
      >
        Delete
      </button>
    </>
  );
};

export default ContactItem;
