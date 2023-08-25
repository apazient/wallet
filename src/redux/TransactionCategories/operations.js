import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from 'redux/Auth/operations';

export const feachCategories = createAsyncThunk(
  'categories/feachCategories',
  async (_, thunkAPI) => {
    try {
      const res = await API.get('/api/transaction-categories');
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
