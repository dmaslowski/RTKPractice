import {configureStore} from '@reduxjs/toolkit';
import accountDataReducer from './AccountDataSlice';

export const reduxStore = configureStore({
  reducer: {
    accountData: accountDataReducer,
  },
});

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;
