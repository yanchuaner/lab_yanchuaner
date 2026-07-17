"use client";

import { FlaskConical } from "lucide-react";
import { useApp } from "@/components/AppProvider";
import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  const { t } = useApp();
  return <div className="not-found"><span><FlaskConical size={26} /></span><p>404</p><h1>{t("notFoundTitle")}</h1><small>{t("notFoundCopy")}</small><ButtonLink href="/">{t("backHome")}</ButtonLink></div>;
}
