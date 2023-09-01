import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getIsAuth } from '../../redux/Auth/selectors';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const isLoggedIn = useSelector(getIsAuth);

  if (isLoggedIn) {
    return children;
  }
  return <Navigate to={location.state?.from} />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
