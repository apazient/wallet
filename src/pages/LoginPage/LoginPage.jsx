import React from 'react';
import {
  Overlay,
  OverlayGradient1,
  OverlayGradient2,
  OverlayGradient3,
  OverlayGradient4,
  OverlayGradient5,
} from './LoginPage.styled';

const LoginPage = ({ children }) => {
  return (
    <Overlay>
      {children}
      <OverlayGradient1></OverlayGradient1>
      <OverlayGradient2></OverlayGradient2>
      <OverlayGradient3></OverlayGradient3>
      <OverlayGradient4></OverlayGradient4>
      <OverlayGradient5></OverlayGradient5>
    </Overlay>
  );
};

export default LoginPage;
