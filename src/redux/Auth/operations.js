import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://wallet.goit.ua',
});

// const setToken = token => {
//   API.defaults.headers.common.Authorization = `Bearer ${token}`;
// };
API.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOiJmMWYxMzBkNC1mOTZkLTRlMjItODYxMi05M2E4ZTk4MDRlOWYiLCJpYXQiOjE2OTI5NTc4MzIsImV4cCI6MTAwMDAwMDE2OTI5NTc4MzJ9.TRIOKOxy8JoZt1_EI9b2CkkaPjCdzK5u0Ty9gT6ol00`;

// const clearToken = () => {
//   API.defaults.headers.common.Authorization = ``;
// };

export const register = createAsyncThunk(
  'auth/reg',
  async (credentials, thunkAPI) => {
    try {
      const res = await API.post('/api/auth/sign-up', credentials);
      // setToken(res.data.token);
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await API.post('/api/auth/sign-in', credentials);
      // setToken(res.data.token);
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
