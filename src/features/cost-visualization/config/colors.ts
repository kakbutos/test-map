export const COST_THRESHOLDS = {
  LOW: 5,
  MEDIUM: 15,
  HIGH: 30,
} as const;

export const COST_COLORS = {
  LOW: '#2E7D32',
  MEDIUM: '#FBC02D',
  HIGH: '#D32F2F',
  VERY_HIGH: '#4B0082',
  UNREACHABLE: '#000000',
  DEFAULT: '#1976D2',
  SELECTED: '#FF6B6B',
} as const;

export const LEGEND_ITEMS = [
  { label: '≤ 5 мин', color: COST_COLORS.LOW },
  { label: '5-15 мин', color: COST_COLORS.MEDIUM },
  { label: '15-30 мин', color: COST_COLORS.HIGH },
  { label: '> 30 мин', color: COST_COLORS.VERY_HIGH },
  { label: 'Недостижимо', color: COST_COLORS.UNREACHABLE },
] as const;

