import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationEN from './locales/en.json'
import translationTA from './locales/ta.json'

const resources = {
    en: {
        translation: translationEN
    },
    ta: {
        translation: translationTA
    }
}

// Fetching the current language from local storage. Storing the current language in local storage to make refresh resistant.
const currentLanguage = localStorage.getItem('language')
if(!currentLanguage) {
    localStorage.setItem('language', 'en')
}

i18n.use(initReactI18next).init({
    resources,
    lng: currentLanguage,
    fallbackLng: currentLanguage,
    interpolation: {
        escapeValue: false,
    }
})

export default i18n;