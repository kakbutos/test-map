import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '@/app/types';
import { siteSelectors } from '@/entities/site';
import { getCostColor } from '../lib/colorMapper';
import { COST_COLORS } from '../config/colors';

export const selectSiteColors = createSelector(
  [
    siteSelectors.selectAllSiteIds,
    (state: RootState) => state.costs.byFrom,
    (state: RootState) => state.siteSelection.selectedSiteId,
  ],
  (allIds, costsByFrom, selectedId) => {
    const colors: Record<number, string> = {};

    if (selectedId === null) {
      allIds.forEach((id) => {
        colors[id] = COST_COLORS.DEFAULT;
      });
    } else {
      const costsFromSelected = costsByFrom[selectedId] || {};
      
      allIds.forEach((id) => {
        if (id === selectedId) {
          colors[id] = COST_COLORS.SELECTED;
        } else {
          const metrics = costsFromSelected[id];
          colors[id] = getCostColor(metrics?.cost);
        }
      });
    }

    return colors;
  }
);

export const selectHoveredCostMetrics = createSelector(
  [
    (state: RootState) => state.siteSelection.selectedSiteId,
    (state: RootState) => state.siteHover.hoveredSiteId,
    (state: RootState) => state.costs.byFrom,
  ],
  (selectedId, hoveredId, costsByFrom) => {
    if (selectedId === null || hoveredId === null) return null;
    
    const costsFromSelected = costsByFrom[selectedId];
    if (!costsFromSelected) return null;
    
    return costsFromSelected[hoveredId] || null;
  }
);

