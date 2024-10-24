import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import useGlobalStore from "./store/global";
import { ThemeProvider } from "./components/theme-provider";
import { t } from "i18next";

function App({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();
  const { language } = useGlobalStore();

  document.title = t("page.title")

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language])

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {children}
    </ThemeProvider>
  )
}

export default App
