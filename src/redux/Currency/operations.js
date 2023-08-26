import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
      return filteredData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchCurrencyData = createAsyncThunk(
//   'currency/fetchCurrencyData',
//   async (_, thunkAPI) => {
//     try {
//       const { data } = await axios.get('https://api.monobank.ua/bank/currency');
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.massege);
//     }
//   }
// );
