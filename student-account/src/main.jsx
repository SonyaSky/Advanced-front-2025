import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { BrowserRouter } from 'react-router-dom';
import i18next from "i18next";
import {I18nextProvider} from 'react-i18next';

import './index.css'
import App from './App.jsx'
import login_ru from "./translations/ru/login.json";
import login_en from "./translations/en/login.json";

i18next.init({
  interpolation: {escapeValue: true},
  lng: "ru",
  resources: {
    en: {
      login: login_en,
    },
    ru: {
      login: login_ru,
    },
  }
})

const root = ReactDOM.createRoot(document.getElementById('root')); 

root.render(
  <BrowserRouter>
  <I18nextProvider i18n={i18next}>
  <App />
  </I18nextProvider>
  </BrowserRouter>
);