import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SiteSelectionState {
  selectedSiteId: number | null;
}

const initialState: SiteSelectionState = {
  selectedSiteId: null,
};

export const siteSelectionSlice = createSlice({
  name: 'siteSelection',
  initialState,
  reducers: {
    selectSite: (state, action: PayloadAction<number>) => {
      state.selectedSiteId = action.payload;
    },
    clearSelection: (state) => {
      state.selectedSiteId = null;
    },
  },
});

export const { selectSite, clearSelection } = siteSelectionSlice.actions;
export const { reducer } = siteSelectionSlice;

