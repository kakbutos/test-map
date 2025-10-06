import React from 'react';
import ReactDOM from 'react-dom/client';
import { StoreProvider } from '@/app';
import { MainPage } from '@/pages/main';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider>
      <MainPage />
    </StoreProvider>
  </React.StrictMode>
);
