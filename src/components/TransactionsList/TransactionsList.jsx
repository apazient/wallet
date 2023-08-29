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
import { selectAllCategories } from 'redux/TransactionCategories/selectors';
import { feachCategories } from 'redux/TransactionCategories/operations';
import { useMediaQuery } from 'react-responsive';
import { IS_DESKTOP, IS_MOBILE, IS_TABLET } from 'styles/const ';
import MobileList from './MobileList';
import TabletAndDesctopList from './TabletAndDesctopList';

const TransactionsList = () => {
  const isMobile = useMediaQuery(IS_MOBILE);
  const isTablet = useMediaQuery(IS_TABLET);
  const isDesktop = useMediaQuery(IS_DESKTOP);

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
    <>
      {isMobile && (
        <MobileList
          dataList={dataList}
          allCategories={allCategories}
          handleDeleteClick={handleDeleteClick}
        />
      )}
      {(isTablet || isDesktop) && (
        <TabletAndDesctopList
          dataList={dataList}
          allCategories={allCategories}
          handleDeleteClick={handleDeleteClick}
        />
      )}
      {isEditTrans && (
        <Modal>
          <ModalEditTransaction />
        </Modal>
      )}
    </>
  );
};
export default TransactionsList;
