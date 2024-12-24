import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the `client` import in React 18
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create the root element
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
