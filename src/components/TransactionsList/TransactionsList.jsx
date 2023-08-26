import { SpriteSVG } from 'pictures/SpriteSVG';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteTransaction,
  fetchTransactions,
} from 'redux/TransactionsList/operations';

import {
  selectToken,
  selectTransaction,
} from 'redux/TransactionsList/selectors';

import { ModalEditTransaction } from 'components/ModalEditTransaction/ModalEditTransaction';
import Modal from 'components/Modal/Modal';
import { isEditTransaction } from 'redux/Global/selectors';
import ButtonEditTransactions from 'components/ButtonEditTransactions/ButtonEditTransactions';

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

const TransactionsList = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const dataList = useSelector(selectTransaction);
  useEffect(() => {
    dispatch(fetchTransactions(token));
  }, [dispatch]);

  console.log(dataList);
  const handleDeleteClick = transactionId => {
    console.log(transactionId);
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
        {dataList?.map(
          ({ id, transactionDate, type, categoryId, comment, amount }) => (
            <TrInfoStyled key={id}>
              <TdDateStyled>{transactionDate}</TdDateStyled>
              <TdTypeStyled>{type}</TdTypeStyled>
              <TdCatagoryStyled>{categoryId}</TdCatagoryStyled>
              <TdCommentStyled>{comment}</TdCommentStyled>
              <TdSumStyled>{amount}</TdSumStyled>
              <TdActionStyled>
                <IconBtnWrapperStyled>
                  <div>
                    <EditIconStyled>
                      <SpriteSVG name={`edit`} />
                      {isEditTransaction && (
                        <Modal>
                          <ModalEditTransaction />
                        </Modal>
                      )}
                      <ButtonEditTransactions />
                    </EditIconStyled>
                  </div>

                  <DeleteTabBtn onClick={() => handleDeleteClick(id)}>
                    Delete
                  </DeleteTabBtn>
                </IconBtnWrapperStyled>
              </TdActionStyled>
            </TrInfoStyled>
          )
        )}
      </tbody>
    </TableStyled>
  );
};
export default TransactionsList;
