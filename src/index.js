import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from 'react-router-dom';
import i18n from 'config/i18next-config';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import './index.css';
import './styles/main.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
);

serviceWorkerRegistration.unregister();
reportWebVitals();
