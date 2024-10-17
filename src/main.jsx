import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// dotenv modulini import qilish shart emas
// (import('dotenv').config();) qatorini olib tashlang

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
