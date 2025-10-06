import type { CostEdge } from '../model/types';

export function validateCost(cost: Partial<CostEdge>): cost is CostEdge {
  const keys: (keyof CostEdge)[] = [
    'from',
    'to',
    'iwait',
    'inveht',
    'xpen',
    'xnum',
    'cost',
  ];

  return keys.every(
    key => typeof cost[key] === 'number' && !Number.isNaN(cost[key] as number)
  );
}
