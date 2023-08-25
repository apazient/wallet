import React from 'react';
import {
  Overlay,
  OverlayGradient1,
  OverlayGradient2,
  OverlayGradient3,
  OverlayGradient4,
  OverlayGradient5,
} from './LoginPage.styled';
import { LoginForm } from 'components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <Overlay>
      <LoginForm />
      <OverlayGradient1></OverlayGradient1>
      <OverlayGradient2></OverlayGradient2>
      <OverlayGradient3></OverlayGradient3>
      <OverlayGradient4></OverlayGradient4>
      <OverlayGradient5></OverlayGradient5>
    </Overlay>
  );
};

export default LoginPage;
