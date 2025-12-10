import clsx from "clsx";
import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "ghost" | "outline" | "accent";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:translate-y-[1px]";

const variantMap: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-primary to-primary-soft text-text-inverse px-5 py-3 shadow-[0_14px_30px_rgba(6,47,79,0.24)] hover:shadow-[0_18px_40px_rgba(6,47,79,0.3)] hover:-translate-y-[1px] focus-visible:outline-primary",
  ghost:
    "bg-transparent text-text-main px-4 py-2 hover:text-primary focus-visible:outline-primary",
  outline:
    "border border-border-strong/80 text-text-main px-5 py-3 hover:border-primary hover:text-primary focus-visible:outline-primary",
  accent:
    "bg-gradient-to-r from-accent to-accent-soft text-text-inverse px-5 py-3 shadow-[0_12px_26px_rgba(212,155,39,0.28)] hover:-translate-y-[1px] hover:shadow-[0_16px_34px_rgba(212,155,39,0.32)] focus-visible:outline-accent",
};

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = clsx(baseClasses, variantMap[variant], className);
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
