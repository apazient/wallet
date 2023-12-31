import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setLastRequestDate } from './currencySlice';

export const fetchCurrencyData = createAsyncThunk(
  'currency/fetchCurrencyData',
  async (_, thunkAPI) => {
    try {
      //840 - USD
      //978 - Euro
      const { data } = await axios.get('https://api.monobank.ua/bank/currency');
      const filteredData = data.filter(
        item => item.currencyCodeA === 840 || item.currencyCodeA === 978
      );
      thunkAPI.dispatch(setLastRequestDate(Date.now()));
      return filteredData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
