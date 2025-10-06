import type { CostEdge, CostMetrics } from '../model/types';

export function indexCosts(edges: CostEdge[]): Record<number, Record<number, CostMetrics>> {
  const byFrom: Record<number, Record<number, CostMetrics>> = {};

  edges.forEach((edge) => {
    const { from, to, iwait, inveht, xpen, xnum, cost } = edge;
    
    if (!byFrom[from]) {
      byFrom[from] = {};
    }

    byFrom[from][to] = {
      iwait,
      inveht,
      xpen,
      xnum,
      cost,
    };
  });

  return byFrom;
}

