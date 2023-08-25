import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalAddTransactionOpen: false,
  isModalLogoutOpen: false,
  isLoading: false,
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
  },
});

export const {
  setIsModalAddTransactionOpen,
  setIsModalLogoutOpen,
  setIsLoading,
} = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
