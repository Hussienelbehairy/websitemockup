"use client";

import Link from "next/link";
import { Card } from "../../ui/card";
import { SectionHeading, SectionShell } from "../../ui/section";
import { Button } from "../../ui/button";
import { useLocale } from "@/app/providers/locale-provider";
import { useCmsContent } from "@/app/providers/cms-provider";

export default function BrandsLanding() {
  const { locale } = useLocale();
  const content = useCmsContent("brands", locale);

  return (
    <div className="flex flex-col gap-6">
      <SectionShell>
        <SectionHeading
          eyebrow={locale === "en" ? "Brand philosophy" : "فلسفة الاختيار"}
          title={
            locale === "en"
              ? "Only brands we can fabricate, install, and warranty."
              : "براندات نقدر نصنعها ونركبها ونضمنها."
          }
          description={content.philosophy}
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {content.materials.map((material) => (
            <Card key={material.id} interactive>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                    {locale === "en" ? "Material" : "الخامة"}
                  </p>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {material.brands.length} {locale === "en" ? "brand" : "براند"}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-text-main">
                  {material.name}
                </h3>
                <p className="text-sm text-text-muted">{material.description}</p>
                <div className="mt-2 flex flex-wrap gap-2 text-xs text-text-muted">
                  {material.bestUses.map((use) => (
                    <span
                      key={use}
                      className="rounded-full bg-background-soft px-3 py-1"
                    >
                      {use}
                    </span>
                  ))}
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {material.brands.map((brand) => (
                    <span
                      key={brand.id}
                      className="rounded-full border border-border-subtle px-3 py-1 text-sm font-semibold text-text-main"
                    >
                      {brand.name}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-3">
                  <Button variant="outline" href={`/brands/${material.id}`}>
                    {locale === "en" ? "Material page" : "صفحة الخامة"}
                  </Button>
                  <Link
                    href="/catalog"
                    className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
                  >
                    {locale === "en" ? "View catalog" : "شوف الكتالوج"}
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </SectionShell>
    </div>
  );
}
