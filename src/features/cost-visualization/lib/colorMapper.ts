import { COST_THRESHOLDS, COST_COLORS } from '../config/colors';

export function getCostColor(cost?: number): string {
  if (cost == null || Number.isNaN(cost)) {
    return COST_COLORS.UNREACHABLE;
  }
  
  if (cost <= COST_THRESHOLDS.LOW) {
    return COST_COLORS.LOW;
  }
  
  if (cost <= COST_THRESHOLDS.MEDIUM) {
    return COST_COLORS.MEDIUM;
  }
  
  if (cost <= COST_THRESHOLDS.HIGH) {
    return COST_COLORS.HIGH;
  }
  
  return COST_COLORS.VERY_HIGH;
}

