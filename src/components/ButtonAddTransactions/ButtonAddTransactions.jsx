import React from 'react';
import { useDispatch } from 'react-redux';
import { setIsModalAddTransactionOpen } from '../../redux/Global/globalSlice';

const ButtonAddTransactions = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(setIsModalAddTransactionOpen(true));
      }}
    >
      +
    </button>
  );
};

export default ButtonAddTransactions;
