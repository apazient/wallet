import { createSelector } from '@reduxjs/toolkit';

export const isAddTransaction = state => {
  return state.global.isModalAddTransactionOpen;
};

export const isModalLogoutOpen = state => {
  return state.global.isModalLogoutOpen;
};

export const isEditTransaction = state => {
  return state.global.isModalEditTransaction;
};

export const selectEditItem = createSelector(
  [state => state.transactions, state => state.global.selected],
  (data, id) => {
    return data.transactions.find(item => item.id === id);
  }
);
