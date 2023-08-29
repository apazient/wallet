import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  BalanceBoxStyled,
  BalanceContainerStyled,
  BalanceStyled,
  BalanceTitleStyled,
} from './Balance.styled';
import { feachTransactionSummary } from 'redux/SummaryPage/operations';
import { selectPeriodTotal } from 'redux/SummaryPage/selectors';

export const Balance = () => {
  const dispatch = useDispatch();

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
