import React from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from 'redux/Global/globalSlice';
import {
  StyledButtonCancel,
  StyledButtonLogout,
  StyledLogoutP,
  StyledSectionLogoutForm,
} from './LogoutForm.styled';

export const LogoutForm = () => {
  const dispatch = useDispatch();

  return (
    <StyledSectionLogoutForm>
      <StyledLogoutP>Are you sure you want to log out?</StyledLogoutP>
      <StyledButtonLogout onClick={e => dispatch()}>Logout</StyledButtonLogout>
      <StyledButtonCancel onClick={e => dispatch(closeModal())}>
        Cancel
      </StyledButtonCancel>
    </StyledSectionLogoutForm>
  );
};
