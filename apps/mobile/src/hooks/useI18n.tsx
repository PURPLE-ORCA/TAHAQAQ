import { useState, useCallback, useEffect } from "react";
import { I18nManager } from "react-native";
import * as SecureStore from "expo-secure-store";
import { i18n, setLocale as setI18nLocale, getCurrentLocale } from "@/locales";

const LOCALE_KEY = "app-locale";

type Listener = () => void;
const listeners = new Set<Listener>();

function notifyListeners() {
  listeners.forEach((l) => l());
}

export function setLocaleAppWide(newLocale: string) {
  setI18nLocale(newLocale);
  SecureStore.setItemAsync(LOCALE_KEY, newLocale).catch(() => {});

  // RTL handling
  const isRTL = newLocale === "ar";
  if (isRTL) {
    I18nManager.allowRTL(true);
    I18nManager.forceRTL(true);
  } else {
    I18nManager.allowRTL(false);
    I18nManager.forceRTL(false);
  }

  notifyListeners();
}

export function useI18n() {
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    const listener = () => forceUpdate((n) => n + 1);
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, []);

  const setLocale = useCallback((newLocale: string) => {
    setLocaleAppWide(newLocale);
  }, []);

  const locale = getCurrentLocale();

  return {
    t: (key: string, options?: Record<string, unknown>) => i18n.t(key, options),
    locale,
    setLocale,
    isRTL: locale === "ar",
  };
}
