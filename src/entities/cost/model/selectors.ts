import type { RootState } from '@/app/types';

export const selectCostsByFrom = (state: RootState) => state.costs.byFrom;
export const selectCostsLoading = (state: RootState) => state.costs.loading;
export const selectCostsError = (state: RootState) => state.costs.error;

export const selectCostMetrics = (from: number, to: number) => (state: RootState) => {
  const costsFromSelected = state.costs.byFrom[from];

  if (!costsFromSelected) return null;
  
  return costsFromSelected[to] || null;
};

