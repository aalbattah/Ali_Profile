import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initGA } from './utils/analytics';

// Initialize Google Analytics with the Measurement ID from index.html
// The Google tag is already loaded in index.html, this ensures proper initialization
const gaMeasurementId = 'G-H7BCKQVCCG';
initGA(gaMeasurementId);

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);