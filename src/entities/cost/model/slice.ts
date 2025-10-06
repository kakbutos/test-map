import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { CostsState, CostEdge } from './types';
import { loadCosts } from '../api/loadCosts';
import { indexCosts } from '../lib/indexCosts';

const initialState: CostsState = {
  byFrom: {},
  loading: false,
  error: null,
};

export const costSlice = createSlice({
  name: 'cost',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadCosts.fulfilled, (state, action: PayloadAction<CostEdge[]>) => {
        state.loading = false;
        state.byFrom = indexCosts(action.payload);
      })
      .addCase(loadCosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Ошибка загрузки затрат';
      });
  },
});

export const { reducer, actions } = costSlice;

