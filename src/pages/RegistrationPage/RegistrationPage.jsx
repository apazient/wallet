import React from 'react';
import {
  OverlayGradient11,
  OverlayGradient12,
  OverlayGradient13,
  OverlayGradient14,
  OverlayGradient15,
  OverlayGradient16,
  RegistrOverlay,
} from './RegistrationPage.styled';

const RegistrationPage = ({ children }) => {
  return (
    <RegistrOverlay RegistrOverlay>
      {children}
      <OverlayGradient11></OverlayGradient11>
      <OverlayGradient12></OverlayGradient12>
      <OverlayGradient13></OverlayGradient13>
      <OverlayGradient14></OverlayGradient14>
      <OverlayGradient15></OverlayGradient15>
      <OverlayGradient16></OverlayGradient16>
    </RegistrOverlay>
  );
};

export default RegistrationPage;
