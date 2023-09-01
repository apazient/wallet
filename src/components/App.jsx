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
import Loader from './Loader/Loader';
// import { feachTransactionSummary } from 'redux/SummaryPage/operations';
import { fetchTransactions } from 'redux/TransactionsList/operations';

export const App = () => {
  const isRefresh = useSelector(state => state.user.isRefresh);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
    // dispatch(feachTransactionSummary());
    dispatch(fetchTransactions());
  }, [dispatch]);

  return isRefresh ? (
    <Loader />
  ) : (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
        // element={isLoggedIn ? <Layout /> : <Navigate to="/login" />}
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
