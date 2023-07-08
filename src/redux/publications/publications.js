import { createAsyncThunk } from '@reduxjs/toolkit';
import * as publicationsApi from '../../services/publications-api';

export const fetchPublications = createAsyncThunk(
  'publications/fetchPublications',
  async (_, { rejectWithValue }) => {
    try {
      const publications = await publicationsApi.fetchPublications();
      return publications;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addPublication = createAsyncThunk(
  'publications/addPublication',
  async (data, { rejectWithValue }) => {
    try {
      const publications = await publicationsApi.addPublication(data);
      return publications;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
