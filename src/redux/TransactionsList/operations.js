import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from 'redux/Auth/operations';

export const fetchTransactions = createAsyncThunk(
  'transactions/fetchAll',
  async (_, { rejectWithValue }) => {
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
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await API.post('/api/transactions', body);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateTransaction = createAsyncThunk(
  'transactions/updateTransaction',
  async (transactionUpdate, { rejectWithValue }) => {
    try {
      const { transactionId, updateData } = transactionUpdate;
      const { data } = await API.patch(
        `/api/transactions/${transactionId}`,
        updateData
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'transaction/deleteTransaction',
  async (transactionId, { rejectWithValue }) => {
    try {
      const { data } = await API.delete(
        `/api/transactions/${String(transactionId)}`
      );
      return data.id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
