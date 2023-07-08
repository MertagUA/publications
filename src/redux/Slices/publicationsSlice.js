import { createSlice } from '@reduxjs/toolkit';
import {
  fetchPublications,
  addPublication,
} from '../publications/publications';

const initialState = {
  entities: [],
  isLoading: false,
  error: null,
};

export const publicationsSlice = createSlice({
  name: 'publications',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchPublications.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchPublications.fulfilled, (state, action) => {
        state.isLoading = false;
        state.entities = action.payload;
        state.error = null;
      })
      .addCase(fetchPublications.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addPublication.pending, state => {
        state.isLoading = true;
      })
      .addCase(addPublication.fulfilled, (state, action) => {
        state.isLoading = false;
        state.entities.push(action.payload);
        state.error = null;
      })
      .addCase(addPublication.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const getPublications = state => state.publications;
