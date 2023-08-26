import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from 'redux/Auth/operations';

export const feachTransactionSummary = createAsyncThunk(
  'summary/feachTransactionSummary',
  async (credentials, thunkAPI) => {
    try {
      const res = await API.get('/api/transactions-summary', {
        params: credentials,
      });
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
