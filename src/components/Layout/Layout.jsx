import { useState } from 'react';
import AppBar from '../AppBar/AppBar';
import { useDispatch } from 'react-redux';
import { logoutAPI } from '../../redux/auth/authOps';
import ModalLogout from '../Modal/ModalLogout';

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
        <ModalLogout onLogout={onLogout} onCloseModal={onCloseModal} />
      )}
      <AppBar onOpenModal={onOpenModal} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
