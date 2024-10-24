import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

import useGlobalStore from "@/store/global";

export default function LanguageSwitcher() {
    const { language, setLanguage } = useGlobalStore();

    return (
        <Select value={language} onValueChange={(value) => setLanguage(value)}>
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
