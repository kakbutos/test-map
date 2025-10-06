import { createAsyncThunk } from '@reduxjs/toolkit';
import { parseCostsCsv } from '../lib/parseCostsCsv';
import type { CostEdge } from '../model/types';

export const loadCosts = createAsyncThunk<CostEdge[], void>(
  'entities/cost/loadCosts',
  async () => {
    const response = await fetch(`${import.meta.env.BASE_URL}costs.csv`);
    
    if (!response.ok) {
      throw new Error('Не удалось загрузить файл costs.csv');
    }
    
    const csvText = await response.text();
    return parseCostsCsv(csvText);
  }
);

