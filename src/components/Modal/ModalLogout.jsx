import css from './ModalLogout.module.css';

const ModalLogout = ({ onLogout, onCloseModal }) => {
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <button type="button" className={css.xBtn}>
          X
        </button>
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
