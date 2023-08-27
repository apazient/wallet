import React from 'react';
import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { getIsAuth } from 'redux/Auth/selectors';

export const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(getIsAuth);

  return isLoggedIn ? <Navigate to="/" /> : children;
};
