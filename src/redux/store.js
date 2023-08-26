import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { userReducer } from './Auth/authSlice';

import { transactionsSliceReducer } from './TransactionsList/TransactionsListSlice';

import { globalReducer } from './Global/globalSlice';
import { categoriesReducer } from './TransactionCategories/categoriesSlice';
import { currencyReducer } from './Currentcy/currentcySlice';
import { summaryReducer } from './SummaryPage/summarySlice';

const persistConfigUser = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    global: globalReducer,
    user: persistReducer(persistConfigUser, userReducer),
    transactions: transactionsSliceReducer,
    tranzCategories: categoriesReducer,
    currency: currencyReducer,
    summary: summaryReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export let persistor = persistStore(store);
