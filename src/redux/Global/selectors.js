export const isAddTransaction = state => {
  return state.global.isModalAddTransactionOpen;
};

export const isModalLogoutOpen = state => {
  return state.global.isModalLogoutOpen;
};

export const isEditTransaction = state => {
  return state.global.isModalEditTransaction;
};
