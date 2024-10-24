// import { ModeToggle } from "@/components/mode-trigger";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { ModeToggle } from "@/components/mode-trigger";
import { useTheme } from "@/components/theme-provider";
import { Switch } from "@/components/ui/switch";
import { getImageUrl } from "@/lib/utils";
import { useTranslation } from "react-i18next";

export default function Header() {

    const { t } = useTranslation("common");
    const { theme, setTheme } = useTheme();

    const handleThemeModeChange = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    return (
        <header className="bg-background shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center">
                    <div className="flex justify-self-start">
                        <img src={getImageUrl('logo.png')} alt="Logo" className="h-8 w-auto" />
                    </div>
                    <div className="flex justify-self-end">
                        <h1 className="text-3xl line-height-20 text-3d font-bold">{t("header.mount_blade_title")}</h1>
                    </div>
                    <div className="flex justify-self-end ml-4">
                        <LanguageSwitcher />
                    </div>
                    <div className="flex items-center ml-4">
                        <ModeToggle />
                        {/* <Switch onChange={handleThemeModeChange} /> */}
                        {/* <p className="ml-2">{t("header.theme_mode")}</p> */}
                    </div>
                </div>
                {/* <div>
                    <ModeToggle />
                </div> */}
            </div>
        </header>

    )
}
