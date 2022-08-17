import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ArtProvider } from './context/ArtContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ArtProvider>
      <App />
    </ArtProvider>
  </React.StrictMode>
);