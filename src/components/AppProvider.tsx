"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { messages, type Locale, type MessageKey } from "@/lib/i18n";

interface AppContextValue {
  locale: Locale;
  theme: "light" | "dark";
  t: (key: MessageKey) => string;
  toggleLocale: () => void;
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("zh");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedLocale = localStorage.getItem("lab-locale") as Locale | null;
    const savedTheme = localStorage.getItem("lab-theme") as "light" | "dark" | null;
    const nextTheme = savedTheme ?? (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    if (savedLocale === "en" || savedLocale === "zh") setLocale(savedLocale);
    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  }, [locale]);

  const toggleLocale = useCallback(() => setLocale((current) => {
    const next = current === "zh" ? "en" : "zh";
    localStorage.setItem("lab-locale", next);
    return next;
  }), []);

  const toggleTheme = useCallback(() => setTheme((current) => {
    const next = current === "light" ? "dark" : "light";
    localStorage.setItem("lab-theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
    return next;
  }), []);

  const t = useCallback((key: MessageKey) => messages[locale][key], [locale]);
  const value = useMemo(() => ({ locale, theme, t, toggleLocale, toggleTheme }), [locale, theme, t, toggleLocale, toggleTheme]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const value = useContext(AppContext);
  if (!value) throw new Error("useApp must be used within AppProvider");
  return value;
}
