import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, register } from './operations';

const initialState = {
  user: {
    email: '',
    password: '',
    name: '',
  },
  isLoading: false,
  isAuth: false,
  error: '',
  token: '',
};
export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isAuth = true;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoading = false;
        state.isAuth = true;
      })
      .addCase(loginThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuth = false;
      });
  },
});

export const userReducer = authSlice.reducer;
