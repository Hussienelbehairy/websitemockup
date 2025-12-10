"use client";

import { Badge } from "../../ui/badge";
import { Card } from "../../ui/card";
import { SectionShell } from "../../ui/section";
import { useLocale } from "@/app/providers/locale-provider";
import { useCmsContent } from "@/app/providers/cms-provider";

export default function CeoBlock() {
  const { locale } = useLocale();
  const ceo = useCmsContent("home", locale).ceo;

  return (
    <SectionShell background="soft">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <Badge tone="accent">
            {locale === "en" ? "CEO Message" : "رسالة الرئيس التنفيذي"}
          </Badge>
          <p className="mt-3 text-xl font-semibold text-text-main">
            “{ceo.message}”
          </p>
          <div className="mt-4 text-sm font-semibold text-primary">
            {ceo.name} · {ceo.title}
          </div>
        </Card>
        <Card>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {ceo.numbers.map((item) => (
              <div key={item.label}>
                <p className="text-3xl font-bold text-text-main">{item.value}</p>
                <p className="text-xs uppercase tracking-[0.12em] text-text-muted">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-text-muted">
            {locale === "en"
              ? "Performance data is ready to sync from CMS dashboards."
              : "أرقام الأداء جاهزة تتسحب من الـ CMS واللوحات."}
          </p>
        </Card>
      </div>
    </SectionShell>
  );
}
