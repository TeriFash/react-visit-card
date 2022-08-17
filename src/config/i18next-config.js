import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import mainUAH from './../languages/uah/main.json';
import mainEN from './../languages/en/main.json';
import mainRU from './../languages/ru/main.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      uah: {
        main: mainUAH
      },
      en: {
        main: mainEN
      },
      ru: {
        main: mainRU
      }
    },
    // lng: 'en',
    fallbackLng: 'en',
    // returnEmptyString: false,
    // keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
