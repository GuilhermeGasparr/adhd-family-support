// src/i18n.js
import i18n from 'i18next';
import pt from '@/messages/pt.json'
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'pt',
  fallbackLng: 'pt',
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    pt: {
      translation: pt,
    },
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
