import { configureStore } from '@reduxjs/toolkit';
import { publicationsSlice } from './Slices/publicationsSlice';

export const store = configureStore({
  reducer: {
    publications: publicationsSlice.reducer,
  },
});
