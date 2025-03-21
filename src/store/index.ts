import { configureStore } from '@reduxjs/toolkit';
import userReduser from './slices/userSlice';
import modalReduser from './slices/modalSlice';

export const store = configureStore({
  reducer: { user: userReduser, modal: modalReduser },
});

export type RootState = ReturnType<typeof store.getState>;
