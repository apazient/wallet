import { createSlice } from '@reduxjs/toolkit';
import { register } from './operations';

const initialState = {
  user: {
    email: '',
    password: '',
    name: '',
  },

  error: '',
  token: '',
};
export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(register.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
    });
  },
});

export const userReducer = authSlice.reducer;
