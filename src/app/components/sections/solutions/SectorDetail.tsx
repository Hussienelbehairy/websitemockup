"use client";

import { Card } from "../../ui/card";
import { SectionHeading, SectionShell } from "../../ui/section";
import { Button } from "../../ui/button";
import { useLocale } from "@/app/providers/locale-provider";
import { useCmsContent } from "@/app/providers/cms-provider";

export default function SectorDetail({ sectorId }: { sectorId: string }) {
  const { locale } = useLocale();
  const sector = useCmsContent("solutions", locale).sectors.find(
    (s) => s.id === sectorId,
  );

  if (!sector) {
    return (
      <SectionShell>
        <p className="text-text-muted">
          {locale === "en" ? "Sector not found." : "القطاع غير موجود."}
        </p>
      </SectionShell>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <SectionShell>
        <SectionHeading
          eyebrow={locale === "en" ? "Sector" : "القطاع"}
          title={sector.name}
          description={sector.description}
        />
        <Card>
          <h3 className="text-lg font-semibold text-text-main">
            {locale === "en" ? "Relevance" : "الأهمية"}
          </h3>
          <ul className="mt-2 space-y-2 text-sm text-text-muted">
            {sector.relevance.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </SectionShell>

      <SectionShell background="soft">
        <SectionHeading
          eyebrow={locale === "en" ? "Applications" : "التطبيقات"}
          title={
            locale === "en"
              ? "Notable applications"
              : "أهم التطبيقات"
          }
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {sector.applications.map((app) => (
            <Card key={app.name} interactive>
              <h3 className="text-lg font-semibold text-text-main">{app.name}</h3>
              <p className="text-sm text-text-muted">
                {locale === "en" ? "Products" : "المنتجات"}:{" "}
                {app.products.join(", ")}
              </p>
              <Button variant="outline" href="/catalog" className="mt-3">
                {locale === "en" ? "View in catalog" : "عرض في الكتالوج"}
              </Button>
            </Card>
          ))}
        </div>
      </SectionShell>
    </div>
  );
}
