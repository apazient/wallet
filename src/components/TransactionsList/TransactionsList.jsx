import { SpriteSVG } from 'pictures/SpriteSVG';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteTransaction,
  fetchTransactions,
} from 'redux/TransactionsList/operations';
import { selectTransaction } from 'redux/TransactionsList/selectors';

import {
  DeleteTabBtn,
  EditIconStyled,
  IconBtnWrapperStyled,
  MainTrStyled,
  TableStyled,
  TdActionStyled,
  TdCatagoryStyled,
  TdDateStyled,
  TdCommentStyled,
  TdSumStyled,
  TdTypeStyled,
  ThStyled,
  TrInfoStyled,
  EditTabBtn,
} from './TransactionsList.styled';
const transactions = [
  {
    id: 1,
    date: '04. 01. 19',
    type: '-',
    category: 'Other',
    comment: 'Gift for your wife',
    sum: '300.00',
  },
  {
    id: 6,
    date: '05.01.19',
    type: '+',
    category: 'Income',
    comment: 'January bonus',
    sum: '8 000.00',
  },
  {
    id: 8,
    date: '05.01.19',
    type: '+',
    category: 'Income',
    comment: 'January bonus',
    sum: '8 000.00',
  },
  {
    id: 5,
    date: '05.01.19',
    type: '+',
    category: 'Income',
    comment: 'January bonus',
    sum: '8 000.00',
  },
];
const TransactionsList = () => {
  const dispatch = useDispatch();
  // const transactions = useSelector(selectTransaction);
  // useEffect(() => {
  //   dispatch(fetchTransactions());
  // }, [dispatch]);

  const handleDeleteClick = transactionId => {
    dispatch(deleteTransaction(transactionId));
  };
  return (
    <TableStyled>
      <thead>
        <MainTrStyled>
          <ThStyled>Date</ThStyled>
          <ThStyled>Type</ThStyled>
          <ThStyled>Category</ThStyled>
          <ThStyled>Comment</ThStyled>
          <ThStyled>Sum</ThStyled>
          <ThStyled>&nbsp;</ThStyled>
        </MainTrStyled>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <TrInfoStyled key={transaction.id}>
            <TdDateStyled>{transaction.date}</TdDateStyled>
            <TdTypeStyled>{transaction.type}</TdTypeStyled>
            <TdCatagoryStyled>{transaction.category}</TdCatagoryStyled>
            <TdCommentStyled>{transaction.comment}</TdCommentStyled>
            <TdSumStyled>{transaction.sum}</TdSumStyled>
            <TdActionStyled>
              <IconBtnWrapperStyled>
                <EditTabBtn>
                  <EditIconStyled>
                    <SpriteSVG name={`edit`} />
                  </EditIconStyled>
                </EditTabBtn>
                <DeleteTabBtn onClick={() => handleDeleteClick(transaction.id)}>
                  Delete
                </DeleteTabBtn>
              </IconBtnWrapperStyled>
            </TdActionStyled>
          </TrInfoStyled>
        ))}
      </tbody>
    </TableStyled>
  );
};
export default TransactionsList;
