"use client";

import { Card } from "../../ui/card";
import { SectionHeading, SectionShell } from "../../ui/section";
import { Button } from "../../ui/button";
import RequestForm from "../../ui/request-form";
import { useLocale } from "@/app/providers/locale-provider";
import { useCmsContent } from "@/app/providers/cms-provider";

export default function ContactPageSection() {
  const { locale } = useLocale();
  const copy = useCmsContent("contact", locale);

  return (
    <div className="flex flex-col gap-6">
      <SectionShell>
        <SectionHeading
          eyebrow={locale === "en" ? "Contact" : "تواصل"}
          title={copy.title}
          description={copy.description}
        />
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <Card>
            <h3 className="text-lg font-semibold text-text-main">
              {locale === "en" ? "Contacts" : "بيانات التواصل"}
            </h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {copy.offices.map((office) => (
                <div key={office.label} className="rounded-xl bg-background-soft p-3">
                  <p className="text-xs uppercase tracking-[0.12em] text-primary">
                    {office.label}
                  </p>
                  <p className="text-sm text-text-main">{office.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 grid gap-2 text-sm text-text-muted">
              <span>{locale === "en" ? "Phone" : "موبايل"}: {copy.phone}</span>
              <span>{locale === "en" ? "Landline" : "تليفون"}: {copy.landline}</span>
              <span>Email: {copy.email}</span>
              <span>{copy.workWeek}</span>
            </div>
            <div className="mt-4 flex gap-3">
              <Button href="tel:+20227506000">
                {locale === "en" ? "Call now" : "اتصل الآن"}
              </Button>
              <Button variant="outline" href="mailto:hello@staron-egypt.com">
                Email
              </Button>
            </div>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-text-main">
              {locale === "en" ? "Request" : "طلب"}
            </h3>
            <RequestForm />
          </Card>
        </div>
      </SectionShell>

      <SectionShell background="soft">
        <SectionHeading
          eyebrow={locale === "en" ? "Tri-map" : "خريطة ثلاثية"}
          title={
            locale === "en"
              ? "Office, warehouse, factory"
              : "المكتب والمخزن والمصنع"
          }
        />
        <div className="grid gap-4 lg:grid-cols-2">
          <Card>
            <p className="text-sm text-text-muted">
              {locale === "en"
                ? "Use this tri-map to showcase multiple locations. Replace the iframe with a CMS-managed map embed."
                : "استخدم الخريطة لعرض المواقع الثلاثة. استبدل الـ iframe ببيانات الـ CMS."}
            </p>
            <div className="mt-3 aspect-[4/3] overflow-hidden rounded-xl border border-border-subtle">
              <iframe
                src={copy.mapEmbed}
                width="100%"
                height="100%"
                loading="lazy"
                aria-label="Map"
              />
            </div>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-text-main">
              {locale === "en" ? "Work week" : "أيام العمل"}
            </h3>
            <p className="text-sm text-text-muted">{copy.workWeek}</p>
            <p className="mt-3 text-sm text-text-muted">
              {locale === "en"
                ? "Appointments and quotations generate emails to the mapped CMS user."
                : "الحجوزات والتسعير بتتبعت بالإيميل لليوزر المسؤول في الـ CMS."}
            </p>
          </Card>
        </div>
      </SectionShell>
    </div>
  );
}
