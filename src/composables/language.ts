import { useI18n } from 'vue-i18n'
import type { SupportedLocale } from '@/i18n'

const LANGUAGE_STORAGE_KEY = 'app-language'

export function useLanguage() {
  const { locale } = useI18n()
  const language = useLocalStorage<SupportedLocale>(LANGUAGE_STORAGE_KEY, 'en')

  // 同步 localStorage 到 i18n locale
  watchEffect(() => {
    locale.value = language.value
  })

  const updateHtmlDir = (lang: SupportedLocale) => {
    const html = document.documentElement
    if (lang === 'ur') {
      html.setAttribute('dir', 'rtl')
    }
    else {
      html.removeAttribute('dir')
    }
  }

  // 监听语言变化并更新 dir 属性
  watchEffect(() => {
    updateHtmlDir(language.value)
  })

  const setLanguage = (lang: SupportedLocale) => {
    language.value = lang
    locale.value = lang
  }

  return {
    language: readonly(language),
    setLanguage,
  }
}
