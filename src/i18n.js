import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi) // Loads translation from JSON files
  .use(LanguageDetector) // Automatically detects user's language
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    fallbackLng: 'en', // Fallback language if the language detector fails
    detection: {
      order: [
        'path',
        'cookie',
        'localStorage',
        'navigator',
        'htmlTag',
        'subdomain',
      ],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Translation file location
    },
    interpolation: {
      escapeValue: false, // React already escapes the values, so this is not needed
    },
  });

export default i18n;
