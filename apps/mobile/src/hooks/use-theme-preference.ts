import { useEffect, useState } from "react";
import { Appearance, useColorScheme } from "react-native";
import * as SecureStore from "expo-secure-store";

export type ThemePreference = "light" | "dark" | "system";

export function useThemePreference() {
  const [theme, setThemeState] = useState<ThemePreference>(() => {
    const stored = SecureStore.getItem("theme-preference");
    if (stored === "light" || stored === "dark" || stored === "system") {
      return stored as ThemePreference;
    }
    return "system";
  });
  const systemColorScheme = useColorScheme();

  useEffect(() => {
    async function loadTheme() {
      try {
        const stored = await SecureStore.getItemAsync("theme-preference");
        if (stored === "light" || stored === "dark" || stored === "system") {
          setThemeState(stored as ThemePreference);
        }
      } catch (e) {
        console.warn("Failed to load theme preference from SecureStore", e);
      }
    }
    loadTheme();
  }, []);

  const resolvedScheme =
    theme === "system" ? (systemColorScheme ?? "light") : theme;

  const setTheme = async (newTheme: ThemePreference) => {
    setThemeState(newTheme);
    const targetScheme = newTheme === "system" ? null : newTheme;
    Appearance.setColorScheme(targetScheme as any);
    try {
      await SecureStore.setItemAsync("theme-preference", newTheme);
    } catch (e) {
      console.warn("Failed to save theme preference to SecureStore", e);
    }
  };

  return {
    theme,
    setTheme,
    resolvedScheme,
  };
}
