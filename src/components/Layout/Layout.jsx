import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';
import Navigation from 'components/Navigation/Navigation';
import DashboardPage from 'pages/DashboardPage/DashboardPage';
import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { getIsLoading } from 'redux/Auth/selectors';
import { useMediaQuery } from 'react-responsive';
// import styled from 'styled-components';
import Balance from 'components/Balance/Balance';
import { Currency } from 'components/Currency/Currency';
import { ISDESKTOP, ISMOBILE, ISTABLET } from 'styles/const ';
import { Main } from 'components/Main/Main';

const Layout = () => {
  const isMobile = useMediaQuery(ISMOBILE);
  const isTablet = useMediaQuery(ISTABLET);
  const isDesctop = useMediaQuery(ISDESKTOP);

  const isLoading = useSelector(getIsLoading);

  return (
    <div>
      {isLoading ? <Loader /> : null}
      <Header />
      <Main>
        {isMobile && (
          <>
            <Navigation />
            <DashboardPage />
            <Outlet />
          </>
        )}
        {isTablet && (
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', gap: '32px' }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '336px',
                }}
              >
                <Navigation />
                <Balance />
              </div>
              <div
                style={{
                  width: '336px',
                }}
              >
                <Currency />
              </div>
            </div>
            <div style={{ width: '100%' }}>
              <Outlet />
            </div>
          </div>
        )}
        {isDesctop && (
          <div style={{ display: 'flex' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '480px',
                marginRight: '1px',
              }}
            >
              <Navigation />
              <Balance />
              <Currency />
            </div>
            <div style={{ width: '100%' }}>
              <Outlet />
            </div>
          </div>
        )}
      </Main>
    </div>
  );
};

export default Layout;
