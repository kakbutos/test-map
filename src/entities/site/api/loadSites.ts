import { createAsyncThunk } from '@reduxjs/toolkit';
import { parseSitesCsv } from '../lib/parseSitesCsv';
import type { Site } from '../model/types';

export const loadSites = createAsyncThunk<Site[], void>(
  'entities/site/loadSites',
  async () => {
    const response = await fetch(`${import.meta.env.BASE_URL}sites.csv`);
    
    if (!response.ok) {
      throw new Error('Не удалось загрузить файл sites.csv');
    }
    
    const csvText = await response.text();
    return parseSitesCsv(csvText);
  }
);

