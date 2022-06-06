import 'i18n/i18nInstance'
import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { useTranslation as useI18nextUseTranslation } from 'react-i18next'
import { SupportedLanguage } from './i18nInstance'
import { DateTime } from 'luxon'
import { TOptions } from 'i18next'
import { createSafeContext } from 'helpers/createSafeContext'
import { log } from 'logger/logger'

// TODO: defaults should come from settings
const defaultLocale = 'en-NZ'
const defaultCurrencyCode = 'NZD'

const supportedLocales = ['en-NZ'] as const

export type SupportedLocale = typeof supportedLocales[number]

interface II18nContext {
  c: (num: number, currencyCode?: string) => string
  d: (dateTime: DateTime | string, formatOptions: Intl.DateTimeFormatOptions) => string
  n: (num: number) => string
  t: (key: string, options?: TOptions) => string
  locale: SupportedLocale
  setLocale: (locale: SupportedLocale) => void
  language: string
  setLanguage: (l: SupportedLanguage) => void
}

export const I18nContext = createSafeContext<II18nContext>('I18nContext not defined')

export const useI18n = (options?: { t9nNamespace?: string } | undefined) => {
  const ctx = I18nContext.useContext()
  // set default translation namespace
  const t9nNamespace = options?.t9nNamespace
  const tWithPredefinedNamespace = useMemo(() => {
    if (!t9nNamespace) return undefined

    // eslint-disable-next-line @typescript-eslint/no-shadow
    return (key: string, options?: TOptions) => ctx.t(key.includes(':') ? key : `${t9nNamespace}:${key}`, options)
  }, [t9nNamespace, ctx])

  if (!tWithPredefinedNamespace) return ctx

  return {
    ...ctx,
    // eslint-disable-next-line @typescript-eslint/no-shadow
    t: tWithPredefinedNamespace,
  }
}

export const useTranslation = (t9nNamespace: string) => useI18n({ t9nNamespace }).t

export const I18nProvider: FC<{ locale?: SupportedLocale; language?: SupportedLanguage }> = ({
  locale: initLocale,
  language: initLanguage,
  children,
}) => {
  const { t: i18nT, i18n } = useI18nextUseTranslation()
  const [locale, setLocaleInternal] = useState<SupportedLocale>(initLocale ?? defaultLocale)

  const setLocale = useCallback((loc: SupportedLocale) => setLocaleInternal(loc), [])

  const setLanguage = useCallback(
    (l: SupportedLanguage) => {
      i18n.changeLanguage(l)
    },
    [i18n]
  )

  const d = useCallback(
    (dateTime: DateTime | string, formatOptions: Intl.DateTimeFormatOptions) => {
      const dt = typeof dateTime === 'string' ? DateTime.fromISO(dateTime) : dateTime
      return dt.setLocale(locale).toLocaleString(formatOptions)
    },
    [locale]
  )

  const n = useCallback((num: number) => num.toLocaleString(locale), [locale])

  const c = useCallback(
    (num: number, currencyCode = defaultCurrencyCode) =>
      (num / 1.0).toLocaleString(locale, {
        minimumFractionDigits: 2,
        currency: currencyCode,
        currencyDisplay: 'symbol',
        style: 'currency',
      }),
    [locale]
  )

  const t = useCallback((key: string, options?: TOptions) => String(i18nT(key, options)), [i18nT])

  useEffect(() => {
    if (initLanguage) setLanguage(initLanguage)
  }, [initLanguage, setLanguage])

  useEffect(() => {
    i18n.options.saveMissing = true
    i18n.options.missingKeyHandler = (languages, namespace, key, fallback) => {
      const message = `Missing translation for key "${key}". Falling back to value "${fallback}"`
      const error = { message, data: { languages, namespace, key, fallback } }
      try {
        throw new Error(JSON.stringify(error))
      } catch (err: unknown) {
        log.error('i18n error', { error: err })
      }
    }
  }, [i18n])

  return (
    <I18nContext.Provider value={{ c, d, n, t, locale, setLocale, language: i18n.language, setLanguage }}>
      {children}
    </I18nContext.Provider>
  )
}
