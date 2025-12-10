"use client";

import { Card } from "../../ui/card";
import { SectionHeading, SectionShell } from "../../ui/section";
import { Button } from "../../ui/button";
import { useLocale } from "@/app/providers/locale-provider";
import { useCmsContent } from "@/app/providers/cms-provider";

export default function AboutSections() {
  const { locale } = useLocale();
  const content = useCmsContent("about", locale);

  return (
    <div className="flex flex-col gap-6">
      <SectionShell>
        <SectionHeading
          eyebrow={locale === "en" ? "About" : "عن الشركة"}
          title={content.hero.title}
          description={content.hero.description}
        />
        <div className="grid gap-4 sm:grid-cols-3">
          {content.mvv.map((item) => (
            <Card key={item.title} interactive>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                {item.title}
              </p>
              <p className="mt-2 text-sm text-text-muted">{item.detail}</p>
            </Card>
          ))}
        </div>
      </SectionShell>

      <SectionShell background="soft">
        <SectionHeading
          eyebrow={locale === "en" ? "History" : "التاريخ"}
          title={locale === "en" ? "Milestones" : "محطات أساسية"}
        />
        <div className="grid gap-4 sm:grid-cols-3">
          {content.history.map((item) => (
            <Card key={item.year}>
              <p className="text-3xl font-bold text-primary">{item.year}</p>
              <p className="text-base font-semibold text-text-main">
                {item.title}
              </p>
              <p className="text-sm text-text-muted">{item.detail}</p>
            </Card>
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <SectionHeading
          eyebrow={locale === "en" ? "Team" : "الفريق"}
          title={content.careers.title}
          description={content.careers.description}
        />
        <div className="grid gap-3 sm:grid-cols-3">
          {content.careers.roles.map((role) => (
            <Card key={role} interactive>
              <p className="text-base font-semibold text-text-main">{role}</p>
              <p className="text-sm text-text-muted">
                {locale === "en"
                  ? "Apply via CMS or email careers@staron-egypt.com"
                  : "قدم من خلال الـ CMS أو careers@staron-egypt.com"}
              </p>
            </Card>
          ))}
        </div>
        <Button href="/contact">
          {locale === "en" ? "Meet the leadership" : "قابل الإدارة"}
        </Button>
      </SectionShell>
    </div>
  );
}
