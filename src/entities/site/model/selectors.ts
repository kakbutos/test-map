import type { RootState } from '@/app/types';

export const selectAllSiteIds = (state: RootState) => state.sites.allIds;
export const selectSitesById = (state: RootState) => state.sites.byId;
export const selectSiteById = (id: number) => (state: RootState) => state.sites.byId[id];
export const selectSitesLoading = (state: RootState) => state.sites.loading;
export const selectSitesError = (state: RootState) => state.sites.error;

