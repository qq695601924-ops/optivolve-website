export type Language = 'en' | 'ur'

const LANGUAGE_STORAGE_KEY = 'app-language'

export function useLanguage() {
  const language = useLocalStorage<Language>(LANGUAGE_STORAGE_KEY, 'en')

  const updateHtmlDir = (lang: Language) => {
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

  const setLanguage = (lang: Language) => {
    language.value = lang
  }

  return {
    language: readonly(language),
    setLanguage,
  }
}
