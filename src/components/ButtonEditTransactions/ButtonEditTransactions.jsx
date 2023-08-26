import React from 'react';
import { useDispatch } from 'react-redux';
import { setIsModalEditTransaction } from '../../redux/Global/globalSlice';

const ButtonEditTransactions = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(setIsModalEditTransaction(true));
      }}
    >
      OpenEditTransaction
    </button>
  );
};

export default ButtonEditTransactions;
