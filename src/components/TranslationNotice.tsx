"use client";

import { Languages } from "lucide-react";
import { useApp } from "./AppProvider";

export function TranslationNotice() {
  const { t } = useApp();
  return <div className="translation-notice" role="note"><Languages size={18} /><div><strong>{t("chineseOnlyTitle")}</strong><p>{t("chineseOnlyCopy")}</p></div></div>;
}
