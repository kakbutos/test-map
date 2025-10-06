import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/types';
import { loadSites, siteSelectors } from '@/entities/site';
import { loadCosts } from '@/entities/cost';
import { selectSiteColors, selectHoveredCostMetrics } from '@/features/cost-visualization';
import { selectSelectedSiteId } from '@/features/site-selection';
import { selectHoveredSiteId } from '@/features/site-hover';

export function useMapData() {
  const dispatch = useAppDispatch();

  const sites = useAppSelector(siteSelectors.selectSitesById);
  const allSiteIds = useAppSelector(siteSelectors.selectAllSiteIds);
  const loading = useAppSelector(siteSelectors.selectSitesLoading);
  const siteColors = useAppSelector(selectSiteColors);
  const selectedSiteId = useAppSelector(selectSelectedSiteId);
  const hoveredSiteId = useAppSelector(selectHoveredSiteId);

  useEffect(() => {
    dispatch(loadSites());
    dispatch(loadCosts());
  }, [dispatch]);

  return {
    sites,
    allSiteIds,
    loading,
    siteColors,
    selectedSiteId,
    hoveredSiteId,
  };
}

export function useTooltipData() {
  const hoveredMetrics = useAppSelector(selectHoveredCostMetrics);
  
  return { hoveredMetrics };
}

