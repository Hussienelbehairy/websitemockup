"use client";

import { Card } from "../../ui/card";
import { SectionHeading, SectionShell } from "../../ui/section";
import { useLocale } from "@/app/providers/locale-provider";
import { useCmsContent } from "@/app/providers/cms-provider";

export default function MaterialHighlights() {
  const { locale } = useLocale();
  const materials = useCmsContent("home", locale).materials;

  return (
    <SectionShell background="soft">
      <SectionHeading
        eyebrow={locale === "en" ? "Material highlights" : "مميزات الخامات"}
        title={
          locale === "en"
            ? "Quality signals straight from the CMS"
            : "مؤشرات الجودة من الـ CMS"
        }
        description={
          locale === "en"
            ? "Each material page can be driven by CMS specs, docs, and colorways."
            : "كل خامة ممكن تتحدث من الـ CMS بالمواصفات والملفات والألوان."
        }
      />
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-4">
        {materials.map((material) => (
          <Card
            key={material.label}
            interactive
            className="h-full min-w-[260px] snap-center"
          >
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                {material.metric}
              </p>
              <h3 className="text-lg font-semibold text-text-main">
                {material.label}
              </h3>
              <p className="text-sm text-text-muted">{material.summary}</p>
              <div className="mt-auto text-sm font-semibold text-primary">
                {material.value}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
