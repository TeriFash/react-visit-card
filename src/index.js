import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/main.scss';
import { BrowserRouter  } from "react-router-dom";
import "./config/i18next-config.js";
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

serviceWorkerRegistration.unregister();
reportWebVitals();
