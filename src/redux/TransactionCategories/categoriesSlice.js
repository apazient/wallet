const { createSlice } = require('@reduxjs/toolkit');
const { feachCategories } = require('./operations');
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
