"use client";

import { Card } from "../../ui/card";
import { SectionHeading, SectionShell } from "../../ui/section";
import { useLocale } from "@/app/providers/locale-provider";
import { useCmsContent } from "@/app/providers/cms-provider";

export default function ScopeGrid() {
  const { locale } = useLocale();
  const scope = useCmsContent("home", locale).scope;

  return (
    <SectionShell background="soft">
      <SectionHeading
        eyebrow={locale === "en" ? "One-stop concept" : "حل متكامل"}
        title={scope.title}
        description={scope.description}
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {scope.steps.map((step) => (
          <Card key={step.title} interactive className="h-full">
            <div className="flex h-full flex-col gap-2">
              <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary">
                <span className="flex h-full w-full items-center justify-center text-sm font-bold">
                  {step.title.slice(0, 2)}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-text-main">
                {step.title}
              </h3>
              <p className="text-sm text-text-muted">{step.detail}</p>
              <div className="mt-auto text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                {locale === "en" ? "CMS-tracked" : "مسجل في الـ CMS"}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
