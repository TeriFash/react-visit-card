import './index.css';
import './styles/main.scss';

import React from 'react';

import i18n from 'config/i18next-config';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faArrowDown,
  faArrowUp,
  fas,
} from '@fortawesome/free-solid-svg-icons';

import App from './App.js';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

library.add(fab, fas, faArrowUp, faArrowDown);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      
        <App />
      
    </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

serviceWorkerRegistration.unregister();
reportWebVitals();
