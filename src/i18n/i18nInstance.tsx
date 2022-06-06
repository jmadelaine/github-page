import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import enNz from './translations/enNz'

const resources = { 'en-NZ': enNz }

export type SupportedLanguage = keyof typeof resources

i18next.use(initReactI18next).init({
  resources,
  fallbackLng: 'en-NZ',
  // Escaping text set to false by default as React does this for us,
  // and i18next will escape things like apostrophes which is just silly.
  interpolation: { escapeValue: false },
  // When testing, translations will appear as "namespace:key"
  appendNamespaceToCIMode: true,
})

i18next.services.formatter?.add('possessive', (value: string) =>
  value.toLowerCase().endsWith('s') ? `${value}'` : `${value}'s`
)
