import { createSlice } from '@reduxjs/toolkit';
import { feachCategories } from './operations';

const initialState = {
  categories: [],
  isExpense: false,
};
const categoriesSlice = createSlice({
  name: 'tranzCategories',
  initialState,
  reducers: {
    showSelect: (state, { payload }) => {
      state.isExpense = payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(feachCategories.fulfilled, (state, { payload }) => {
      state.categories = payload;
    });
  },
});

export const { showSelect } = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;
