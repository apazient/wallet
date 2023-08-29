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
import { IS_DESKTOP, IS_MOBILE, IS_TABLET } from 'styles/const ';
import { Main } from 'components/Main/Main';
import {
  WrapperNavBalCur,
  WrapperNavCur,
  WrapperOutlet,
} from './Layout.styled';

const Layout = () => {
  const isMobile = useMediaQuery(IS_MOBILE);
  const isTablet = useMediaQuery(IS_TABLET);
  const isDesktop = useMediaQuery(IS_DESKTOP);

  const isLoading = useSelector(getIsLoading);

  return (
    <>
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
          <>
            <WrapperNavBalCur>
              <WrapperNavCur>
                <Navigation />
                <Balance />
              </WrapperNavCur>
              <WrapperNavCur>
                <Currency />
              </WrapperNavCur>
            </WrapperNavBalCur>
            <div>
              <Outlet />
            </div>
          </>
        )}
        {isDesktop && (
          <WrapperNavBalCur>
            <WrapperNavCur>
              <Navigation />
              <Balance />
              <Currency />
            </WrapperNavCur>
            <WrapperOutlet>
              <Outlet />
            </WrapperOutlet>
          </WrapperNavBalCur>
        )}
      </Main>
    </>
  );
};

export default Layout;
