import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: require('./locales/en/translation.json')
      },
      de: {
        translation: require('./locales/de/translation.json')
      }
    },
    lng: 'en', // standart language
    fallbackLng: 'en', // fallback language on error
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
