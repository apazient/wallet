import React from 'react';
import { Overlay } from './LoginPage.styled';
import { LoginForm } from 'components/LoginForm/LoginForm';
import {
  Overlay14,
  Overlay16,
  Overlay17,
  Overlay18,
  Overlay19,
  Overlay20,
} from 'components/Main/Main.styled';
import { useMediaQuery } from 'react-responsive';
import { IS_DESKTOP, IS_MOBILE, IS_TABLET } from 'styles/const ';

const LoginPage = () => {
  const isMobile = useMediaQuery(IS_MOBILE);
  const isTablet = useMediaQuery(IS_TABLET);
  const isDesktop = useMediaQuery(IS_DESKTOP);
  return (
    <>
      {isMobile && (
        <>
          <LoginForm />
          <Overlay16 />
          <Overlay18 />
          <Overlay14 />
          <Overlay19 />
          <Overlay17 />
          <Overlay20 />
        </>
      )}

      {(isTablet || isDesktop) && (
        <Overlay>
          <LoginForm />
          <Overlay16 />
          <Overlay18 />
          <Overlay14 />
          <Overlay19 />
          <Overlay17 />
          <Overlay20 />
        </Overlay>
      )}
    </>
  );
};

export default LoginPage;
