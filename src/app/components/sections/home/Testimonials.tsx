"use client";

import { Card } from "../../ui/card";
import { SectionHeading, SectionShell } from "../../ui/section";
import { useLocale } from "@/app/providers/locale-provider";
import { useCmsContent } from "@/app/providers/cms-provider";

export default function Testimonials() {
  const { locale } = useLocale();
  const testimonials = useCmsContent("home", locale).testimonials;

  return (
    <SectionShell>
      <SectionHeading
        eyebrow={locale === "en" ? "Testimonials" : "آراء العملاء"}
        title={
          locale === "en"
            ? "Voices from healthcare, retail, and banking"
            : "آراء من الصحة والتجزئة والبنوك"
        }
        description={
          locale === "en"
            ? "Quotes and case studies are structured to pull from the blog CMS."
            : "الشهادات والدراسات جاهزة للربط مع المدونة."
        }
      />
      <div className="grid gap-4 md:grid-cols-2">
        {testimonials.map((item) => (
          <Card key={item.name} interactive className="h-full">
            <p className="text-lg font-semibold text-text-main">“{item.quote}”</p>
            <p className="mt-3 text-sm font-semibold text-primary">
              {item.name}
            </p>
            <p className="text-xs uppercase tracking-[0.12em] text-text-muted">
              {item.role}
            </p>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
