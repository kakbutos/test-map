import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SiteHoverState {
  hoveredSiteId: number | null;
}

const initialState: SiteHoverState = {
  hoveredSiteId: null,
};

export const siteHoverSlice = createSlice({
  name: 'siteHover',
  initialState,
  reducers: {
    setHoveredSite: (state, action: PayloadAction<number | null>) => {
      state.hoveredSiteId = action.payload;
    },
  },
});

export const { setHoveredSite } = siteHoverSlice.actions;
export const { reducer } = siteHoverSlice;

