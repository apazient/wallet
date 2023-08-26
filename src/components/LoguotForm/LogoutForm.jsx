import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from 'redux/Global/globalSlice';
import {
  StyledButtonCancel,
  StyledButtonLogout,
  StyledLogoutP,
  StyledSectionLogout,
} from './LogoutForm.styled';
import { logoutThunk } from 'redux/Auth/operations';
import { toast } from 'react-toastify';
import { getIsLoading, getUser } from 'redux/Auth/selectors';
import { useNavigate } from 'react-router-dom';

export const LogoutForm = () => {
  const dispatch = useDispatch();
  const { username } = useSelector(getUser);
  const navigate = useNavigate();

  const isLoading = useSelector(getIsLoading);

  const handleLogout = () => {
    dispatch(logoutThunk())
      .unwrap()
      .then(() => {
        dispatch(closeModal());
        navigate('/login');
        toast.success(`Goobye, ${username}!`);
      });
  };

  return (
    <StyledSectionLogout>
      <StyledLogoutP>Are you sure you want to log out?</StyledLogoutP>
      <StyledButtonLogout onClick={handleLogout} disabled={isLoading}>
        Logout
      </StyledButtonLogout>
      <StyledButtonCancel onClick={e => dispatch(closeModal())}>
        Cancel
      </StyledButtonCancel>
    </StyledSectionLogout>
  );
};
