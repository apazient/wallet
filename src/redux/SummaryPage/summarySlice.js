import { feachTransactionSummary } from './operations';
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  categoriesSummary: [],
  incomeSummary: 0,
  expenseSummary: 0,
  periodTotal: 0,
  year: 2000,
  month: 1,
};
const summarySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setMonth: (state, { payload }) => {
      state.month = payload.value;
    },
    setYear: (state, { payload }) => {
      state.year = payload;
    },
  },
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
export const { setMonth, setYear } = summarySlice.actions;
