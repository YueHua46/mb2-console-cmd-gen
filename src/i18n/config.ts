import commonEn from "../locales/en-US/common.json";
import commonZh from "../locales/zh-CN/common.json";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const defaultNS = "common";
const resources = {
    "en-US": {
        common: commonEn,
    },
    "zh-CN": {
        common: commonZh,
    },
} as const;

const t = await i18next.use(initReactI18next).init({
    lng: "en",
    ns: ["common"],
    defaultNS,
    resources,
});

export {
    defaultNS,
    resources,
    t,
    i18next
}