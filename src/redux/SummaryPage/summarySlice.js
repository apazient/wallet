import { feachTransactionSummary } from './operations';
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  categoriesSummary: [],
  incomeSummary: 0,
  expenseSummary: 0,
  periodTotal: 0,
  year: 0,
  month: 0,
};
const summarySlice = createSlice({
  name: 'tranzCategories',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(feachTransactionSummary.fulfilled, (state, { payload }) => {
      state.categoriesSummary = payload.categoriesSummary;
      state.incomeSummary = payload.incomeSummary;
      state.expenseSummary = payload.expenseSummary;
      state.periodTotal = payload.periodTotal;
      //   state.year = payload.year;
      //   state.month = payload.month;
    });
  },
});

export const summaryReducer = summarySlice.reducer;
