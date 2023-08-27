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
} from './TransactionsList.styled';
import { selectAllCategories } from 'redux/TransactionCategories/selectors';
import { getCategoriName } from 'helpers/helpers';
import { feachCategories } from 'redux/TransactionCategories/operations';
import { setIsModalEditTransaction } from 'redux/Global/globalSlice';

const TransactionsList = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const dataList = useSelector(selectTransaction);
  const allCategories = useSelector(selectAllCategories);

  const isEditTrans = useSelector(isEditTransaction);

  useEffect(() => {
    dispatch(fetchTransactions(token));
  }, [dispatch, token]);
  useEffect(() => {
    dispatch(feachCategories());
  }, [dispatch]);

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
        {dataList?.map(
          ({ id, transactionDate, type, categoryId, comment, amount }) => (
            <TrInfoStyled key={id}>
              <TdDateStyled>{transactionDate}</TdDateStyled>
              <TdTypeStyled>{type === 'INCOME' ? '+' : '-'}</TdTypeStyled>
              <TdCatagoryStyled>
                {dataList.length !== 0
                  ? getCategoriName(allCategories, categoryId)
                  : 'notNull'}
              </TdCatagoryStyled>
              <TdCommentStyled>{comment}</TdCommentStyled>
              <TdSumStyled>{Math.abs(amount)}</TdSumStyled>
              <TdActionStyled>
                <IconBtnWrapperStyled>
                  <div
                    onClick={() => {
                      dispatch(setIsModalEditTransaction({ id, flag: true }));
                    }}
                  >
                    <EditIconStyled>
                      <SpriteSVG name={`edit`} />
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
      {isEditTrans && (
        <Modal>
          <ModalEditTransaction />
        </Modal>
      )}
    </TableStyled>
  );
};
export default TransactionsList;
