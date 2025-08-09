import i18n, { Resource } from 'i18next'
import { I18nextProvider, initReactI18next } from 'react-i18next'

import global_es from '../assets/translations/es/global.es.json'
import global_en from '../assets/translations/en/global.en.json'

const stored = localStorage.getItem('lng'); // string | null
const defaultLng = (stored ?? 'es') as 'es' | 'en';

const resources = {
    es: { global: global_es },
    en: { global: global_en },
} satisfies Resource;

i18n.use(initReactI18next).init({
    lng: defaultLng,
    fallbackLng: 'es',
    supportedLngs: ['es', 'en'],
    ns: ['global'],
    defaultNS: 'global',
    resources,
})

export { I18nextProvider, i18n }