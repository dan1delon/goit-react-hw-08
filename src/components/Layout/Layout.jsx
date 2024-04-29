import { useState } from 'react';
import AppBar from '../AppBar/AppBar';
import { useDispatch } from 'react-redux';
import { logoutAPI } from '../../redux/auth/authOps';

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onOpenModal = () => setIsModalOpen(true);
  const onCloseModal = () => setIsModalOpen(false);

  const onLogout = () => {
    dispatch(logoutAPI());
    onCloseModal();
  };

  return (
    <>
      {isModalOpen && (
        <div>
          <p>Log out?</p>
          <button type="button" onClick={onLogout}>
            Yes
          </button>
          <button type="button" onClick={onCloseModal}>
            No
          </button>
        </div>
      )}
      <AppBar onOpenModal={onOpenModal} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
