import Header from 'components/Header/Header';
import HomeTab from 'components/HomeTab/HomeTab';
import Navigation from 'components/Navigation/Navigation';
import DashboardPage from 'pages/DashboardPage/DashboardPage';
import React from 'react';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <>
      <Header />
      <Navigation />
      <DashboardPage />
      <HomeTab />
      <Outlet />
    </>
  );
};

export default Layout;
