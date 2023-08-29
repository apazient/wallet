import React from 'react';

import { DashboardContainerStyled } from './DashboardPage.styled';
import { Currency } from 'components/Currency/Currency';
import Balance from 'components/Balance/Balance';
import { useMediaQuery } from 'react-responsive';
import { IS_DESKTOP, IS_TABLET } from 'styles/const ';

export const DashboardPage = () => {
  const isTablet = useMediaQuery(IS_TABLET);
  const isDesktop = useMediaQuery(IS_DESKTOP);
  return (
    <>
      {(isTablet || isDesktop) && (
        <DashboardContainerStyled>
          <Balance />
          <Currency />
        </DashboardContainerStyled>
      )}
    </>
  );
};

export default DashboardPage;
