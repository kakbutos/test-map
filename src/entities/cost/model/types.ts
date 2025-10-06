export interface CostMetrics {
  iwait: number;
  inveht: number;
  xpen: number;
  xnum: number;
  cost: number;
}

export interface CostEdge extends CostMetrics {
  from: number;
  to: number;
}

export interface CostsState {
  byFrom: Record<number, Record<number, CostMetrics>>;
  loading: boolean;
  error: string | null;
}

