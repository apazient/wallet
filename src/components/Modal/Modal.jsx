import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalOverlay } from './Modal.styled';
import { useDispatch } from 'react-redux';
import { closeModal } from 'redux/Global/globalSlice';
import { showSelect } from 'redux/TransactionCategories/categoriesSlice';
import { LogoutForm } from 'components/LoguotForm/LogoutForm';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const handleEscape = e => {
      if (e.code === 'Escape') {
        dispatch(closeModal());
        dispatch(showSelect(false));
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [dispatch]);

  return createPortal(
    <ModalOverlay
      onClick={e => {
        if (e.target === e.currentTarget) {
          dispatch(showSelect(false));
          dispatch(closeModal());
        }
      }}
    >
      <LogoutForm />
    </ModalOverlay>,
    modalRoot
  );
};

export default Modal;
