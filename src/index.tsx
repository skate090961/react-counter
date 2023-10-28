import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './assets/styles/globals.css'
import './assets/styles/_variables.css'
import './assets/styles/_reset.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);