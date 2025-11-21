import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@styles/index.css';
import CoffeeApp from './CoffeeApp';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

createRoot(rootElement).render(
  <StrictMode>
    <CoffeeApp />
  </StrictMode>
);
