import React from 'react';

import { DashboardContainerStyled } from './DashboardPage.styled';
import { Currency } from 'components/Currency/Currency';
import Balance from 'components/Balance/Balance';
import { useMediaQuery } from 'react-responsive';
import { ISDESKTOP, ISMOBILE, ISTABLET } from 'styles/const ';

export const DashboardPage = () => {
  const isMobile = useMediaQuery(ISMOBILE);
  const isTablet = useMediaQuery(ISTABLET);
  const isDesctop = useMediaQuery(ISDESKTOP);
  return (
    <>
      {isMobile && (
        <DashboardContainerStyled>
          <Balance />
        </DashboardContainerStyled>
      )}

      {(isTablet || isDesctop) && (
        <DashboardContainerStyled>
          <Balance />
          <Currency />
        </DashboardContainerStyled>
      )}
    </>
  );
};

export default DashboardPage;
