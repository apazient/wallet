import React from 'react';

import { DashboardContainerStyled } from './DashboardPage.styled';
import { Currency } from 'components/Currency/Currency';
import Balance from 'components/Balance/Balance';
import { useMediaQuery } from 'react-responsive';
import { IS_DESKTOP, IS_MOBILE, IS_TABLET } from 'styles/const ';

export const DashboardPage = () => {
  const isMobile = useMediaQuery(IS_MOBILE);
  const isTablet = useMediaQuery(IS_TABLET);
  const isDesktop = useMediaQuery(IS_DESKTOP);
  return (
    <>
      {isMobile && (
        <DashboardContainerStyled>
          <Balance />
        </DashboardContainerStyled>
      )}

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
