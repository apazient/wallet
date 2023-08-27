import Header from 'components/Header/Header';
import Navigation from 'components/Navigation/Navigation';
import DashboardPage from 'pages/DashboardPage/DashboardPage';
import React from 'react';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <>
      <Header />
      <Navigation />
      {/* <DashboardPage /> */}
      <Outlet />
    </>
  );
};

export default Layout;
