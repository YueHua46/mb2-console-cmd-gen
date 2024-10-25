import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

import useGlobalStore from "@/store/global";
import { usePostHog } from "posthog-js/react";

export default function LanguageSwitcher() {
    const { language, setLanguage } = useGlobalStore();
    const posthog = usePostHog();

    const handleChange = (value: string) => {
        setLanguage(value)
        posthog.capture('$language_change', {
            '$language': value
        })
    }

    return (
        <Select value={language} onValueChange={(value) => handleChange(value)}>
            <SelectTrigger>
                <SelectValue defaultValue={language} placeholder="Select a language" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="en-US">🇺🇸 English</SelectItem>
                <SelectItem value="zh-CN">🇨🇳 简体中文</SelectItem>
            </SelectContent>
        </Select>
    )
}
