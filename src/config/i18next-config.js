import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { resources } from 'locales';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    // lng: 'en',
    fallbackLng: 'en',
    // returnEmptyString: false,
    // keySeparator: false,
    interpolation: {
      escapeValue: false
    },
    defaultNS: ['main'],
    // detection: {
    //   order: ['path', 'navigator']
    // },
    preload: true,
    debug: process.env.NODE_ENV === 'development', // true,
    react: {
      wait: true
    }
  });

export default i18n;
