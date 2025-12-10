import clsx from "clsx";
import { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-2",
        align === "center" && "items-center text-center",
      )}
    >
      {eyebrow ? (
        <span className="text-sm font-medium uppercase tracking-[0.12em] text-primary">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-semibold leading-tight text-text-main sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-3xl text-base text-text-muted">{description}</p>
      ) : null}
    </div>
  );
}

export function SectionShell({
  children,
  className,
  background = "transparent",
}: {
  children: ReactNode;
  className?: string;
  background?: "transparent" | "soft";
}) {
  return (
    <section
      className={clsx(
        "relative w-full px-4 py-16 sm:px-8 lg:px-12",
        background === "soft" &&
          "rounded-[28px] border border-border-subtle/70 bg-background-soft/80 shadow-[0_18px_50px_rgba(6,47,79,0.06)]",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        {children}
      </div>
    </section>
  );
}
