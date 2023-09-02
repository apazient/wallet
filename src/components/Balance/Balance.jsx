import React from 'react';
import { useSelector } from 'react-redux';

import {
  BalanceBoxStyled,
  BalanceContainerStyled,
  BalanceStyled,
  BalanceTitleStyled,
} from './Balance.styled';
import { newBalans, formatNumber } from 'helpers/helpers';
import { selectTransaction } from 'redux/TransactionsList/selectors';

export const Balance = () => {
  const allTranzaction = useSelector(selectTransaction);

  return (
    <BalanceContainerStyled>
      <BalanceBoxStyled>
        <BalanceTitleStyled>Your balance</BalanceTitleStyled>
        <BalanceStyled>
          <span>&#8372;</span>{' '}
          {formatNumber(newBalans(allTranzaction).toFixed(2))}
        </BalanceStyled>
      </BalanceBoxStyled>
    </BalanceContainerStyled>
  );
};

export default Balance;
