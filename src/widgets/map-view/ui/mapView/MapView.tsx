import { useState, useCallback } from 'react';
import Map, { Marker } from 'react-map-gl/maplibre';
import type { MapMouseEvent } from 'react-map-gl/maplibre';
import { useAppDispatch } from '@/app/types';
import { selectSite, clearSelection } from '@/features/site-selection';
import { setHoveredSite } from '@/features/site-hover';
import { Tooltip } from '@/shared/ui';
import { Legend } from '../legend/Legend';
import { LoadingState } from '../loader/LoadingState';
import { SiteMarker } from '../site-marker';
import { useMapData, useTooltipData } from '../../model/hooks';
import { METRIC_CONFIGS } from '../../config/metrics';
import 'maplibre-gl/dist/maplibre-gl.css';
import './MapView.css';

export function MapView() {
  const dispatch = useAppDispatch();
  const [tooltip, setTooltip] = useState<{ x: number; y: number; siteId: number } | null>(null);

  const { sites, allSiteIds, loading, siteColors, selectedSiteId, hoveredSiteId } = useMapData();
  const { hoveredMetrics } = useTooltipData();

  const handleSiteClick = useCallback((siteId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(selectSite(siteId));
  }, [dispatch]);

  const handleMapClick = useCallback((e: MapMouseEvent) => {
    if (!e.originalEvent.defaultPrevented) {
      dispatch(clearSelection());
    }
  }, [dispatch]);

  const handleSiteMouseEnter = useCallback((siteId: number, e: React.MouseEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    setTooltip({
      x: rect.left + rect.width / 2,
      y: rect.top,
      siteId,
    });
    dispatch(setHoveredSite(siteId));
  }, [dispatch]);

  const handleSiteMouseLeave = useCallback(() => {
    setTooltip(null);
    dispatch(setHoveredSite(null));
  }, [dispatch]);

  if (loading) {
    return <LoadingState />;
  }

  return (
    <div className="map-container">
      <Map
        initialViewState={{
          longitude: 37.607,
          latitude: 55.773,
          zoom: 13.5,
        }}
        style={{ width: '100%', height: '100%' }}
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        onClick={handleMapClick}
      >
        {allSiteIds.map((siteId) => {
          const site = sites[siteId];
          if (!site) return null;

          const color = siteColors[siteId];
          const isSelected = siteId === selectedSiteId;

          return (
            <Marker key={siteId} longitude={site.longitude} latitude={site.latitude}>
              <SiteMarker
                color={color}
                isSelected={isSelected}
                onClick={(e) => handleSiteClick(siteId, e)}
                onMouseEnter={(e) => handleSiteMouseEnter(siteId, e)}
                onMouseLeave={handleSiteMouseLeave}
              />
            </Marker>
          );
        })}
      </Map>

      <Legend />

      {tooltip && hoveredSiteId && (
        <Tooltip x={tooltip.x} y={tooltip.y}>
          <div className="tooltip__title">
            ID: {hoveredSiteId} — {sites[hoveredSiteId]?.name}
          </div>
          {selectedSiteId !== null && selectedSiteId !== hoveredSiteId && (
            <div className="tooltip__metrics">
              {hoveredMetrics ? (
                <>
                  {METRIC_CONFIGS.map(({ key, label, decimals, unit }) => (
                    <div key={key} className="tooltip__metric">
                      <span className="tooltip__metric-label">{label}:</span>
                      <span className="tooltip__metric-value">
                        {hoveredMetrics[key].toFixed(decimals)} {unit}
                      </span>
                    </div>
                  ))}
                </>
              ) : (
                <div className="tooltip__metric">
                  <span style={{ color: '#ff6b6b' }}>Недостижимо</span>
                </div>
              )}
            </div>
          )}
        </Tooltip>
      )}
    </div>
  );
}

