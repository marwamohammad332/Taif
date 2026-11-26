import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import ar from './locales/ar.json';
import { useLanguageStore } from './store/languageStore';

const resources = {
  
    en:{translation:en},
    ar:{translation:ar}

  
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: useLanguageStore.getState().language,
    interpolation: {
      
      escapeValue: false
    }
  });

export default i18n;