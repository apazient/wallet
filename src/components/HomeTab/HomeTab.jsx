import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';
import Modal from 'components/Modal/Modal';
import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';
import TransactionsList from 'components/TransactionsList/TransactionsList';
import React from 'react';

import { useSelector } from 'react-redux';
import { isAddTransaction } from 'redux/Global/selectors';

const HomeTab = () => {
  const isAddTrans = useSelector(isAddTransaction);

  return (
    <div>
      <h1>HomeTab</h1>
      <TransactionsList />
      <ButtonAddTransactions />
      {isAddTrans && (
        <Modal>
          <ModalAddTransaction />
        </Modal>
      )}
    </div>
  );
};

export default HomeTab;
