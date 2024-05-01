import css from './ModalLogout.module.css';
import CloseIcon from '@mui/icons-material/Close';

const ModalLogout = ({ onLogout, onCloseModal }) => {
  return (
    <div className={css.backdrop} onClick={onCloseModal}>
      <div className={css.modal}>
        <CloseIcon className={css.CloseIcon} onClick={onCloseModal} />
        <p className={css.title}>Log out?</p>
        <div className={css.btnWrap}>
          <button type="button" onClick={onLogout} className={css.btnYes}>
            Yes
          </button>
          <button type="button" onClick={onCloseModal} className={css.btnNo}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalLogout;
