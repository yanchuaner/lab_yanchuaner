import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export function Button({ className = "", ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={`button ${className}`} {...props} />;
}

export function ButtonLink({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "secondary" }) {
  return <Link href={href} className={`button button-${variant}`}>{children}</Link>;
}

export function Badge({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "success" | "info" }) {
  return <span className={`badge badge-${tone}`}>{children}</span>;
}

export function SectionHeading({ title, copy, action }: { title: string; copy: string; action?: ReactNode }) {
  return <div className="section-heading"><div><h2>{title}</h2><p>{copy}</p></div>{action}</div>;
}
