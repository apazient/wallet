import React from 'react';
import { useSelector } from 'react-redux';

import {
  BalanceBoxStyled,
  BalanceContainerStyled,
  BalanceStyled,
  BalanceTitleStyled,
} from './Balance.styled';

import { selectPeriodTotal } from 'redux/SummaryPage/selectors';

export const Balance = () => {
  const balanseTotal = useSelector(selectPeriodTotal);

  return (
    <BalanceContainerStyled>
      <BalanceBoxStyled>
        <BalanceTitleStyled>Your balance</BalanceTitleStyled>
        <BalanceStyled>
          <span>&#8372;</span> {balanseTotal}
        </BalanceStyled>
      </BalanceBoxStyled>
    </BalanceContainerStyled>
  );
};

export default Balance;
