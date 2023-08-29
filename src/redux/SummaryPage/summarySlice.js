import { feachTransactionSummary } from './operations';
import { createSlice } from '@reduxjs/toolkit';

const date = new Date();
const initialState = {
  categoriesSummary: [],
  incomeSummary: 0,
  expenseSummary: 0,
  periodTotal: 0,
  year: date.getFullYear(),
  month: date.getMonth() + 1,
  loadInProces: false,
  error: '',
};
const summarySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setMonth: (state, { payload }) => {
      state.month = payload;
    },
    setYear: (state, { payload }) => {
      state.year = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(feachTransactionSummary.fulfilled, (state, { payload }) => {
        state.categoriesSummary = payload.categoriesSummary;
        state.incomeSummary = payload.incomeSummary;
        state.expenseSummary = payload.expenseSummary;
        state.periodTotal = payload.periodTotal;
        state.loadInProces = false;
      })
      .addCase(feachTransactionSummary.rejected, (state, { payload }) => {
        state.error = payload;
        state.loadInProces = false;
      })
      .addCase(feachTransactionSummary.pending, (state, { payload }) => {
        state.loadInProces = true;
      });
  },
});

export const summaryReducer = summarySlice.reducer;
export const { setMonth, setYear } = summarySlice.actions;
