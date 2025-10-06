import Papa from 'papaparse';
import type { Site } from '../model/types';
import { validateSite } from './validateSite';
import { parseCsvNumber } from '@/shared/lib/csv/parseCsvNumber';

export const parseSitesCsv = (csvText: string): Site[] => {
  const { data } = Papa.parse<string[]>(csvText, {
    delimiter: ';',
    skipEmptyLines: true,
  });

  return data
    .slice(1)
    .filter(row => row.length >= 4)
    .map(row => ({
      id: Number.parseInt(row[0]?.trim() ?? '', 10),
      name: row[1]?.trim() ?? '',
      longitude: parseCsvNumber(row[2]),
      latitude: parseCsvNumber(row[3]),
    }))
    .filter(validateSite);
};
