import { createSlice } from '@reduxjs/toolkit';
import { feachCategories } from './operations';

const initialState = {
  categories: [],
};
const categoriesSlice = createSlice({
  name: 'tranzCategories',
  initialState,
  extraReducers: builder => {
    builder.addCase(feachCategories.fulfilled, (state, { payload }) => {
      state.categories = payload;
    });
  },
});

export const categoriesReducer = categoriesSlice.reducer;
