"use client";

import { Card } from "../../ui/card";
import { SectionHeading, SectionShell } from "../../ui/section";
import { Button } from "../../ui/button";
import { useLocale } from "@/app/providers/locale-provider";
import { useCmsContent } from "@/app/providers/cms-provider";

export default function ApplicationDetail({
  applicationId,
}: {
  applicationId: string;
}) {
  const { locale } = useLocale();
  const app = useCmsContent("solutions", locale).applications.find(
    (a) => a.id === applicationId,
  );

  if (!app) {
    return (
      <SectionShell>
        <p className="text-text-muted">
          {locale === "en" ? "Application not found." : "التطبيق غير موجود."}
        </p>
      </SectionShell>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <SectionShell>
        <SectionHeading
          eyebrow={locale === "en" ? "Application" : "تطبيق"}
          title={app.name}
          description={app.history}
        />
      </SectionShell>

      <SectionShell background="soft">
        <SectionHeading
          eyebrow={locale === "en" ? "Best practice" : "أفضل الممارسات"}
          title={
            locale === "en"
              ? "How we execute"
              : "إزاي بننفذ"
          }
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold text-text-main">
              {locale === "en" ? "Process" : "العملية"}
            </h3>
            <ul className="mt-2 space-y-2 text-sm text-text-muted">
              {app.practice.map((item) => (
                <li key={item} className="rounded-lg bg-background-soft px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-text-main">
              {locale === "en" ? "Specifications" : "المواصفات"}
            </h3>
            <ul className="mt-2 space-y-2 text-sm text-text-muted">
              {app.specs.map((item) => (
                <li key={item} className="rounded-lg bg-background-soft px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex gap-3">
              {app.blog.map((post) => (
                <Button key={post} variant="outline" href={post}>
                  {locale === "en" ? "Related article" : "مقال مرتبط"}
                </Button>
              ))}
            </div>
          </Card>
        </div>
      </SectionShell>
    </div>
  );
}
