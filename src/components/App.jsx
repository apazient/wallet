import { Route, Routes } from 'react-router';
import Layout from './Layout/Layout';
import HomeTab from './HomeTab/HomeTab';
import SummaryPage from 'pages/SummaryPage/SummaryPage';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import { PublicRoute } from 'HOC/PublicRoute/PublicRoute';
import LoginPage from 'pages/LoginPage/LoginPage';
import NotFound from 'pages/NotFound/NotFound';
import { PrivateRoute } from 'HOC/PrivateRoute/PrivateRoute';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { currentUser } from 'redux/Auth/operations';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
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
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );

};
