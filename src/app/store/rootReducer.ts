import { combineReducers } from '@reduxjs/toolkit';
import { siteReducer } from '@/entities/site';
import { costReducer } from '@/entities/cost';
import { siteSelectionReducer } from '@/features/site-selection';
import { siteHoverReducer } from '@/features/site-hover';

export const rootReducer = combineReducers({
  sites: siteReducer,
  costs: costReducer,
  siteSelection: siteSelectionReducer,
  siteHover: siteHoverReducer,
});

