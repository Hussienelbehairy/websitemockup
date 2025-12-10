"use client";

import { Card } from "../../ui/card";
import { SectionHeading, SectionShell } from "../../ui/section";
import { Button } from "../../ui/button";
import { useLocale } from "@/app/providers/locale-provider";
import { useCmsContent } from "@/app/providers/cms-provider";

export default function SpaceDetail({ spaceId }: { spaceId: string }) {
  const { locale } = useLocale();
  const space = useCmsContent("solutions", locale).spaces.find(
    (s) => s.id === spaceId,
  );

  if (!space) {
    return (
      <SectionShell>
        <p className="text-text-muted">
          {locale === "en" ? "Space not found." : "المساحة غير موجودة."}
        </p>
      </SectionShell>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <SectionShell>
        <SectionHeading
          eyebrow={locale === "en" ? "Space" : "المساحة"}
          title={space.name}
          description={space.description}
        />
      </SectionShell>

      <SectionShell background="soft">
        <SectionHeading
          eyebrow={locale === "en" ? "Applications" : "التطبيقات"}
          title={
            locale === "en"
              ? "What we build here"
              : "بننفذ إيه هنا"
          }
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {space.applications.map((app) => (
            <Card key={app.name} interactive>
              <h3 className="text-lg font-semibold text-text-main">{app.name}</h3>
              <p className="text-sm text-text-muted">
                {locale === "en" ? "Using" : "باستخدام"}: {app.products.join(", ")}
              </p>
              <Button variant="outline" href="/catalog" className="mt-3">
                {locale === "en" ? "Open catalog" : "افتح الكتالوج"}
              </Button>
            </Card>
          ))}
        </div>
      </SectionShell>
    </div>
  );
}
