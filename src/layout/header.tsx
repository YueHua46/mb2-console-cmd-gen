// import { ModeToggle } from "@/components/mode-trigger";
import { ModeToggle } from "@/components/mode-trigger";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/language-switcher";
export default function Header() {

    const { t } = useTranslation("common");
 
    return (
        <header className="bg-background shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center">
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
