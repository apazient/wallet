import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalAddTransactionOpen: false,
  isModalLogoutOpen: false,
  isLoading: false,
  isModalEditTransaction: false,
  selected: null,
};
export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setIsModalAddTransactionOpen: (state, { payload }) => {
      state.isModalAddTransactionOpen = payload;
    },
    setIsModalLogoutOpen: (state, { payload }) => {
      state.isModalLogoutOpen = payload;
    },
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    closeModal: (state, { payload }) => {
      state.isModalAddTransactionOpen = false;
      state.isModalLogoutOpen = false;
      state.isModalEditTransaction = false;
    },
    setIsModalEditTransaction: (state, { payload }) => {
      state.isModalEditTransaction = payload.flag;
      state.selected = payload.id;
    },
  },
});

export const {
  setIsModalAddTransactionOpen,
  setIsModalLogoutOpen,
  setIsLoading,
  closeModal,
  setIsModalEditTransaction,
} = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
