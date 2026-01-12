import { createI18n } from 'vue-i18n'
import type { I18n, I18nOptions } from 'vue-i18n'
import en from './locales/en.json'
import ur from './locales/ur.json'

export type SupportedLocale = 'en' | 'ur'

const messages = {
  en,
  ur,
}

const i18nOptions: I18nOptions = {
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
}

export const i18n = createI18n<false, typeof i18nOptions>(i18nOptions) as I18n

export default i18n
