import React from 'react';
import { RegistrOverlay } from './RegistrationPage.styled';
import RegistrationForm from '../../components/RegisrationForm/RegisrationForm';
import { useMediaQuery } from 'react-responsive';
import { IS_DESKTOP, IS_MOBILE, IS_TABLET } from 'styles/const ';
import {
  Overlay14,
  Overlay16,
  Overlay17,
  Overlay18,
  Overlay19,
  Overlay20,
} from 'components/Main/Main.styled';

const RegistrationPage = () => {
  const isMobile = useMediaQuery(IS_MOBILE);
  const isTablet = useMediaQuery(IS_TABLET);
  const isDesktop = useMediaQuery(IS_DESKTOP);
  return (
    <>
      {isMobile && (
        <>
          <RegistrationForm />
          <Overlay16 />
          <Overlay18 />
          <Overlay14 />
          <Overlay19 />
          <Overlay17 />
          <Overlay20 />
        </>
      )}

      {(isTablet || isDesktop) && (
        <RegistrOverlay>
          <RegistrationForm />
          <Overlay16 />
          <Overlay18 />
          <Overlay14 />
          <Overlay19 />
          <Overlay17 />
          <Overlay20 />
        </RegistrOverlay>
      )}
    </>
  );
};

export default RegistrationPage;
