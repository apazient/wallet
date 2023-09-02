import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from 'redux/Auth/operations';
import { closeModal } from 'redux/Global/globalSlice';

export const fetchTransactions = createAsyncThunk(
  'transactions/fetchAll',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await API.get('/api/transactions');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addTransaction = createAsyncThunk(
  'transaction/addTransaction',
  async (body, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await API.post('/api/transactions', body);
      dispatch(closeModal());
      dispatch(fetchTransactions());
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateTransaction = createAsyncThunk(
  'transactions/updateTransaction',
  async (transactionUpdate, { rejectWithValue, dispatch }) => {
    try {
      const { transactionId, updateData } = transactionUpdate;
      const { data } = await API.patch(
        `/api/transactions/${transactionId}`,
        updateData
      );
      dispatch(fetchTransactions());
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'transaction/deleteTransaction',
  async (transactionId, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await API.delete(
        `/api/transactions/${String(transactionId)}`
      );
      dispatch(fetchTransactions());
      return data.id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
