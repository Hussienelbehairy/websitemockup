"use client";

import { Badge } from "../../ui/badge";
import { Card } from "../../ui/card";
import { SectionHeading, SectionShell } from "../../ui/section";
import { Button } from "../../ui/button";
import { useLocale } from "@/app/providers/locale-provider";
import { useCmsContent } from "@/app/providers/cms-provider";

export default function FlagshipProject() {
  const { locale } = useLocale();
  const data = useCmsContent("home", locale).flagship;

  return (
    <SectionShell>
      <SectionHeading
        eyebrow={data.title}
        title={`${data.name} · ${data.location}`}
        description={data.description}
      />
      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="relative overflow-hidden rounded-3xl border border-border-subtle">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-accent/10" />
          <div
            className="h-full min-h-[340px] bg-cover bg-center"
            style={{ backgroundImage: `url(${data.image})` }}
            aria-hidden
          />
          <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary backdrop-blur">
            {locale === "en" ? "Flagship delivery" : "تسليم مميز"}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Card>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {data.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-text-muted">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-bold text-text-main">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <div className="flex flex-col gap-3">
              <Badge tone="accent">
                {locale === "en" ? "What stood out" : "أبرز النقاط"}
              </Badge>
              <ul className="space-y-2 text-sm text-text-muted">
                {data.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 rounded-xl bg-background-soft px-3 py-2"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-3">
                <Button href="/contact">
                  {locale === "en" ? "Book a site visit" : "احجز زيارة"}
                </Button>
                <Button variant="outline" href="/solutions">
                  {locale === "en" ? "View solutions" : "شوف الحلول"}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </SectionShell>
  );
}
