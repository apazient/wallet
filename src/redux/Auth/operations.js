import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://wallet.goit.ua',
});

const setToken = token => {
  API.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  API.defaults.headers.common.Authorization = ``;
};

export const register = createAsyncThunk(
  'auth/reg',
  async (credentials, thunkAPI) => {
    try {
      const res = await API.post('/api/auth/sign-up', credentials);
      setToken(res.data.token);

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
      setToken(res.data.token);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const { data } = await API.delete('/api/auth/sign-out');
      clearToken();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const currentUser = createAsyncThunk(
  'auth/currentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const newToken = state.user.token;
    if (!newToken) {
      return thunkAPI.rejectWithValue('NO autorization!!!');
    }
    setToken(newToken);
    try {
      const { data } = await API.get('/api/users/current');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
