import React from 'react';

import { DashboardContainerStyled } from './DashboardPage.styled';
import { Currency } from 'components/Currency/Currency';
import Balance from 'components/Balance/Balance';

export const DashboardPage = () => {
  return (
    <DashboardContainerStyled>
      <Balance />
      <Currency />
    </DashboardContainerStyled>
  );
};

export default DashboardPage;
