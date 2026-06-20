import { I18n } from "i18n-js";
import { getLocales } from "expo-localization";
import * as SecureStore from "expo-secure-store";
import en from "./translations/en.json";
import fr from "./translations/fr.json";
import ar from "./translations/ar.json";

const LOCALE_KEY = "app-locale";
const SUPPORTED = ["en", "fr", "ar"];

export const i18n = new I18n({ en, fr, ar });

// Synchronous init: use stored locale or device locale
const stored = SecureStore.getItem(LOCALE_KEY);
const deviceLang = getLocales()[0]?.languageCode ?? "en";
const initial =
  stored && SUPPORTED.includes(stored)
    ? stored
    : SUPPORTED.includes(deviceLang)
      ? deviceLang
      : "en";

i18n.locale = initial;
i18n.enableFallback = true;
i18n.defaultLocale = "en";

export const t = (key: string, options?: Record<string, unknown>) =>
  i18n.t(key, options);

export const getCurrentLocale = () => i18n.locale;

export const setLocale = (locale: string) => {
  i18n.locale = locale;
};
