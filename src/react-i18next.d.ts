// import the original type declarations
import 'react-i18next';
// import all namespaces (for the default language, only)
import en from 'locales/en';
import zh from 'locales/zh';


// react-i18next 版本 低于 11.11.0 的写法
declare module 'react-i18next' {
    // and extend them!
    interface Resources {
        en: typeof en;
        zh: typeof zh;
    }
}

// react-i18next 版本 高于 11.11.0 的写法
declare module 'react-i18next' {
    // and extend them!
    interface CustomTypeOptions {
        // custom namespace type if you changed it
        defaultNS: 'zh';
        // custom resources type
        resources: {
            en: typeof en;
            zh: typeof zh;
        };
    };
};
