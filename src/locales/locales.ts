import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import appConfig from '@/configs/app.config';
import en from './lang/en.json';
import errEn from './lang/errors/en.json';

const resources = {
  en: {
    translation: { ...en, ...errEn },
  },
};
i18n.use(initReactI18next).init({
  resources,
  fallbackLng: appConfig.locale,
  lng: appConfig.locale,
  interpolation: {
    escapeValue: false,
  },
});

export const dateLocales: {
  [key: string]: () => Promise<ILocale>;
} = {
  en: () => import('dayjs/locale/en'),
};

export default i18n;
