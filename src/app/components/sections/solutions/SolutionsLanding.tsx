"use client";

import Link from "next/link";
import { Card } from "../../ui/card";
import { SectionHeading, SectionShell } from "../../ui/section";
import { Button } from "../../ui/button";
import { useLocale } from "@/app/providers/locale-provider";
import { useCmsContent } from "@/app/providers/cms-provider";

export default function SolutionsLanding() {
  const { locale } = useLocale();
  const content = useCmsContent("solutions", locale);

  return (
    <div className="flex flex-col gap-6">
      <SectionShell>
        <SectionHeading
          eyebrow={locale === "en" ? "Solutions" : "الحلول"}
          title={content.hero.title}
          description={content.hero.description}
        />
        <div className="grid gap-3 sm:grid-cols-3">
          {content.differentiators.map((item) => (
            <Card key={item} interactive>
              <p className="text-sm text-text-main">{item}</p>
            </Card>
          ))}
        </div>
      </SectionShell>

      <SectionShell background="soft">
        <SectionHeading
          eyebrow={locale === "en" ? "Sectors" : "القطاعات"}
          title={
            locale === "en"
              ? "Sector-led solutioning"
              : "حلول موجهة لكل قطاع"
          }
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {content.sectors.map((sector) => (
            <Card key={sector.id} interactive>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-text-main">
                  {sector.name}
                </h3>
                <Button variant="outline" href={`/solutions/sector/${sector.id}`}>
                  {locale === "en" ? "Open" : "افتح"}
                </Button>
              </div>
              <p className="text-sm text-text-muted">{sector.description}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-text-muted">
                {sector.relevance.map((rel) => (
                  <span
                    key={rel}
                    className="rounded-full bg-background-soft px-3 py-1"
                  >
                    {rel}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <SectionHeading
          eyebrow={locale === "en" ? "Spaces" : "المساحات"}
          title={locale === "en" ? "Where we install" : "أماكن التنفيذ"}
        />
        <div className="grid gap-4 sm:grid-cols-3">
          {content.spaces.map((space) => (
            <Card key={space.id} interactive>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-text-main">
                  {space.name}
                </h3>
                <Link
                  href={`/solutions/space/${space.id}`}
                  className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
                >
                  {locale === "en" ? "View" : "عرض"}
                </Link>
              </div>
              <p className="text-sm text-text-muted">{space.description}</p>
              <ul className="mt-3 space-y-1 text-xs text-text-muted">
                {space.applications.map((app) => (
                  <li key={app.name} className="rounded-lg bg-background-soft px-3 py-1">
                    {app.name} · {app.products.join(", ")}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </SectionShell>

      <SectionShell background="soft">
        <SectionHeading
          eyebrow={locale === "en" ? "Applications" : "التطبيقات"}
          title={
            locale === "en"
              ? "Application playbooks"
              : "دليل التطبيق"
          }
        />
        <div className="grid gap-4 sm:grid-cols-3">
          {content.applications.map((app) => (
            <Card key={app.id} interactive>
              <h3 className="text-lg font-semibold text-text-main">
                {app.name}
              </h3>
              <p className="text-sm text-text-muted">{app.history}</p>
              <ul className="mt-2 space-y-1 text-xs text-text-muted">
                {app.practice.map((p) => (
                  <li key={p} className="rounded-lg bg-background-soft px-3 py-1">
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                href={`/solutions/application/${app.id}`}
                className="mt-3 inline-flex text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                {locale === "en" ? "Open application" : "افتح التطبيق"}
              </Link>
            </Card>
          ))}
        </div>
      </SectionShell>
    </div>
  );
}
