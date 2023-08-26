import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrencyData } from './operations';

const initialState = {
  data: [
    { currency: 'usd', buy: null, sell: null },
    {
      currency: 'euro',
      buy: null,
      sell: null,
    },
  ],
  loading: false,
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCurrencyData.fulfilled, (state, { payload }) => {
        state.data[0].buy = payload[0].rateBuy.toFixed(2);
        state.data[0].sell = payload[0].rateSell.toFixed(2);
        state.data[1].buy = payload[1].rateBuy.toFixed(2);
        state.data[1].sell = payload[1].rateSell.toFixed(2);

        state.loading = false;
      })
      .addCase(fetchCurrencyData.pending, state => {
        state.loading = true;
      })
      .addCase(fetchCurrencyData.rejected, state => {
        state.loading = false;
      });
  },
});

export const currencyReducer = currencySlice.reducer;
