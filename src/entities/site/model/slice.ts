import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { SitesState, Site } from './types';
import { loadSites } from '../api/loadSites';

const initialState: SitesState = {
  byId: {},
  allIds: [],
  loading: false,
  error: null,
};

export const siteSlice = createSlice({
  name: 'site',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadSites.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadSites.fulfilled, (state, action: PayloadAction<Site[]>) => {
        state.loading = false;
        state.byId = {};
        state.allIds = [];
        
        action.payload.forEach((site) => {
          state.byId[site.id] = site;
          state.allIds.push(site.id);
        });
      })
      .addCase(loadSites.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Ошибка загрузки остановок';
      });
  },
});

export const { reducer, actions } = siteSlice;

