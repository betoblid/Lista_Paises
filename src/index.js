import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Rotas from './rotas';

const root = ReactDOM.createRoot(document.getElementById('view'));
root.render(
  <React.StrictMode>
    <Rotas />
  </React.StrictMode>
);
