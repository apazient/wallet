import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  BalanceContainerStyled,
  BalanceStyled,
  BalanceTitleStyled,
} from './Balance.styled';
import { feachTransactionSummary } from 'redux/SummaryPage/operations';

export const Balance = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(feachTransactionSummary());
  }, [dispatch]);

  const periodTotal = useSelector(state => state.summary.periodTotal);

  return (
    <BalanceContainerStyled>
      <BalanceTitleStyled>Your balance</BalanceTitleStyled>
      <BalanceStyled>{` ${periodTotal}`}</BalanceStyled>
    </BalanceContainerStyled>
  );
};

export default Balance;
