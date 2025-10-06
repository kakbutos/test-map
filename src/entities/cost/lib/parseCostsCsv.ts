import Papa from 'papaparse';
import type { CostEdge } from '../model/types';
import { validateCost } from './validateCost';
import { parseCsvNumber } from '@/shared/lib/csv/parseCsvNumber';

export const parseCostsCsv = (csvText: string): CostEdge[] => {
  const { data } = Papa.parse<string[]>(csvText, {
    delimiter: ';',
    skipEmptyLines: true,
  });

  return data
    .slice(1)
    .filter(row => row.length >= 7)
    .map(row => ({
      from: Number.parseInt(row[0]?.trim() ?? '', 10),
      to: Number.parseInt(row[1]?.trim() ?? '', 10),
      iwait: parseCsvNumber(row[2]),
      inveht: parseCsvNumber(row[3]),
      xpen: parseCsvNumber(row[4]),
      xnum: parseCsvNumber(row[5]),
      cost: parseCsvNumber(row[6]),
    }))
    .filter(validateCost);
};
