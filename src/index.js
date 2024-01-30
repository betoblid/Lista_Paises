import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/Global.css';
import { ContextProvaider } from './store';
import Router from './Router';

const root = ReactDOM.createRoot(document.getElementById('view'));
root.render(
  <React.StrictMode>
    <ContextProvaider>
      <Router />
    </ContextProvaider>
  </React.StrictMode>
);
