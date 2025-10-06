import type { RootState } from '@/app/types';

export const selectHoveredSiteId = (state: RootState) => 
  state.siteHover.hoveredSiteId;

