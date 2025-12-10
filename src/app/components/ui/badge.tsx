import clsx from "clsx";
import { ReactNode } from "react";

export function Badge({
  children,
  tone = "default",
  className,
}: {
  children: ReactNode;
  tone?: "default" | "accent" | "muted";
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]",
        tone === "default" && "bg-primary/10 text-primary",
        tone === "accent" && "bg-accent/15 text-accent",
        tone === "muted" && "bg-border-subtle text-text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
