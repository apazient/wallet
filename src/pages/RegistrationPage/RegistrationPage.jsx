import React from 'react';
import { RegistrOverlay } from './RegistrationPage.styled';
import RegistrationForm from '../../components/RegisrationForm/RegisrationForm';
import { useMediaQuery } from 'react-responsive';
import { ISDESKTOP, ISMOBILE, ISTABLET } from 'styles/const ';
import {
  Overlay14,
  Overlay16,
  Overlay17,
  Overlay18,
  Overlay19,
  Overlay20,
} from 'components/Main/Main.styled';

const RegistrationPage = () => {
  const isMobile = useMediaQuery(ISMOBILE);
  const isTablet = useMediaQuery(ISTABLET);
  const isDesctop = useMediaQuery(ISDESKTOP);
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

      {(isTablet || isDesctop) && (
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
