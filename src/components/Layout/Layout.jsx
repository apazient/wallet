import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';
import Navigation from 'components/Navigation/Navigation';
import DashboardPage from 'pages/DashboardPage/DashboardPage';
import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { getIsLoading } from 'redux/Auth/selectors';

const Layout = () => {
  const isLoading = useSelector(getIsLoading)
  
  return (
    <>
    {isLoading ? <Loader/>:null}
      <Header />
      <Navigation />
      <DashboardPage />
      <Outlet />
    </>
  );
};

export default Layout;
