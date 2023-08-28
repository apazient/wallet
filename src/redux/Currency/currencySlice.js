import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrencyData } from './operations';

const initialState = {
  data: [
    { currency: 'usd', buy: null, sell: null },
    {
      currency: 'eur',
      buy: null,
      sell: null,
    },
  ],
  loading: false,
  lastRequestDate: 0,
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setLastRequestDate: (state, { payload }) => {
      state.lastRequestDate = payload;
    },
  },
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
export const { setLastRequestDate } = currencySlice.actions;
