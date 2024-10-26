import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import useGlobalStore from "./store/global";
import { ThemeProvider } from "./components/theme-provider";
import { t } from "i18next";
import { getThemeMode } from "./lib/utils";

function App({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();
  const { language, setLanguage } = useGlobalStore();

  document.title = t("page.title")

  useEffect(() => {
    // 如果语言不为空，则设置语言
    if (language) {
      i18n.changeLanguage(language)
    } else {
      // 如果语言为空，则设置为默认语言
      const language = window.navigator.language
      setLanguage(language)
      i18n.changeLanguage(language)
    }
  }, [language])

  return (
    <ThemeProvider defaultTheme={getThemeMode()} storageKey="vite-ui-theme">
      {children}
    </ThemeProvider>
  )
}

export default App
