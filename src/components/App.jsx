
import { Route, Routes } from 'react-router';
import Layout from './Layout/Layout';
import HomeTab from './HomeTab/HomeTab';
import SummaryPage from 'pages/SummaryPage/SummaryPage';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import { PublicRoute } from 'HOC/PublicRoute/PublicRoute';
import LoginPage from 'pages/LoginPage/LoginPage';

export const App = () => {
  return (

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeTab />} />
        <Route path="summary" element={<SummaryPage />} />
        <Route
          path="logup"
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
        <Route path="*" element={<div>NotFound</div>} />
      </Route>
    </Routes>

  );
};
