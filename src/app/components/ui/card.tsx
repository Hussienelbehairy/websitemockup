import clsx from "clsx";
import { ReactNode } from "react";

export function Card({
  children,
  className,
  interactive = false,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-3xl border border-border-subtle/70 bg-gradient-to-br from-white/90 via-white to-surface-alt p-6 shadow-[0_20px_60px_rgba(6,47,79,0.08)] backdrop-blur",
        interactive &&
          "transition-transform transition-shadow hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(6,47,79,0.16)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
