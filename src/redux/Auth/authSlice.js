import { createSlice } from '@reduxjs/toolkit';
import { currentUser, loginThunk, logoutThunk, register } from './operations';

const initialState = {
  user: {
    email: '',
    password: '',
    username: '',
  },
  isAuth: false,
  isLoading: false,
  isRefresh: false,
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
        state.isLoading = false;
      })
      .addCase(register.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
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
      })
      .addCase(logoutThunk.fulfilled, (state, action) => {
        state.user = {
          name: '',
          email: '',
        };
        state.token = '';
        state.isLoading = false;
        state.isAuth = false;
      })
      .addCase(logoutThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(logoutThunk.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(currentUser.fulfilled, (state, { payload }) => {
        state.user.email = payload.email;
        state.user.username = payload.username;
        state.isAuth = true;
        state.isRefresh = false;
      })
      .addCase(currentUser.pending, (state, { payload }) => {
        state.isRefresh = true;
      })
      .addCase(currentUser.rejected, (state, { payload }) => {
        state.error = payload;
        state.isRefresh = false;
      });
  },
});

export const userReducer = authSlice.reducer;
