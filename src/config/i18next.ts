import i18next from 'i18next'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import { queryClient } from './react_query'

import global_es from '../assets/translations/es/global.es.json'
import global_en from '../assets/translations/en/global.en.json'

const default_lng = localStorage.getItem('lng') !== null ? localStorage.getItem('lng') : 'us-US'

i18next.use(initReactI18next).init({
    lng: default_lng,
    defaultNS: 'global',
    resources: {
        es: {
            global: global_es
        },
        us: {
            global: global_en
        },
    }
})

export { I18nextProvider, i18next }