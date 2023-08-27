import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  BalanceContainerStyled,
  BalanceStyled,
  BalanceTitleStyled,
} from './Balance.styled';
import { feachTransactionSummary } from 'redux/SummaryPage/operations';
import { selectPeriodTotal } from 'redux/SummaryPage/selectors';

export const Balance = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(feachTransactionSummary());
  }, [dispatch]);

  const balanseTotal = useSelector(selectPeriodTotal);

  return (
    <BalanceContainerStyled>
      <BalanceTitleStyled>Your balance</BalanceTitleStyled>
      <BalanceStyled>
        <span>&#8372;</span> {balanseTotal}
      </BalanceStyled>
    </BalanceContainerStyled>
  );
};

export default Balance;
