import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './ui/App';
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
