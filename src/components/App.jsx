import { Route, Routes } from 'react-router';
import Layout from './Layout/Layout';
import HomeTab from './HomeTab/HomeTab';
import SummaryPage from 'pages/SummaryPage/SummaryPage';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import { PublicRoute } from 'HOC/PublicRoute/PublicRoute';
import LoginPage from 'pages/LoginPage/LoginPage';
import NotFound from 'pages/NotFound/NotFound';
import { PrivateRoute } from 'HOC/PrivateRoute/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { currentUser } from 'redux/Auth/operations';
import { Currency } from './Currency/Currency';
import { getIsAuth } from 'redux/Auth/selectors';
import { Navigate } from 'react-router';

export const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsAuth);
  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);
  console.log(isLoggedIn);

  return (
    <Routes>
      <Route
        path="/"
        element={isLoggedIn ? <Layout /> : <Navigate to="/login" />}
      >
        <Route
          index
          element={
            <PrivateRoute>
              <HomeTab />
            </PrivateRoute>
          }
        />
        <Route
          path="summary"
          element={
            <PrivateRoute>
              <SummaryPage />
            </PrivateRoute>
          }
        />
        <Route
          path="currency"
          element={
            <PrivateRoute>
              <Currency />
            </PrivateRoute>
          }
        />
      </Route>
      <Route
        path="register"
        element={
          <PublicRoute>
            <RegistrationPage />
          </PublicRoute>
        }
      />
      <Route
        path="login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
