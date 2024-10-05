import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> {/* Wrap with BrowserRouter */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
