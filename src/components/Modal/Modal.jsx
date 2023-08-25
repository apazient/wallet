import React from 'react';
import { createPortal } from 'react-dom';
import { ModalOverlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children }) => {
  return createPortal(<ModalOverlay>{children}</ModalOverlay>, modalRoot);
};

export default Modal;
