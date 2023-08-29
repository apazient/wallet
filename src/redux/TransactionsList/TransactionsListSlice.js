import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addTransaction,
  deleteTransaction,
  fetchTransactions,
  updateTransaction,
} from './operations';
import { setIsModalAddTransactionOpen } from 'redux/Global/globalSlice';
import { logoutThunk } from 'redux/Auth/operations';
const pending = (state, action) => {
  state.loading = true;
  state.error = '';
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    transactions: [],
    isLoading: false,
    error: null,
  },

  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.transactions = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.transactions.push(action.payload);
        setIsModalAddTransactionOpen(state, { payload: false });
      })
      .addCase(addTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateTransaction.fulfilled, (state, action) => {
        const updatedTransaction = action.payload;
        const index = state.transactions.findIndex(
          transaction => transaction.id === updatedTransaction.id
        );
        if (index !== -1) {
          state.transactions[index] = updatedTransaction;
        }
      })
      .addCase(updateTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.transactions = state.transactions.filter(
          transaction => transaction.id !== action.payload
        );
      })
      .addCase(deleteTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logoutThunk.fulfilled, (state, action) => {
        state.transactions = [];
      })
      .addMatcher(
        isAnyOf(
          fetchTransactions.fulfilled,
          addTransaction.fulfilled,
          updateTransaction.fulfilled,
          deleteTransaction.fulfilled
        ),
        state => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchTransactions.pending,
          deleteTransaction.pending,
          addTransaction.pending,
          updateTransaction.pending
        ),
        pending
      );
  },
});

export const transactionsSliceReducer = transactionsSlice.reducer;
