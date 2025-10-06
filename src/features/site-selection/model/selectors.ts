import type { RootState } from '@/app/types';

export const selectSelectedSiteId = (state: RootState) => 
  state.siteSelection.selectedSiteId;

