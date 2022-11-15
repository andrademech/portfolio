import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import './index.css';
import './i18n/index.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
