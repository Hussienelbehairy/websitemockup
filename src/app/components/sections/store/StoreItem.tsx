"use client";

import { useState } from "react";
import { Card } from "../../ui/card";
import { SectionHeading, SectionShell } from "../../ui/section";
import { Button } from "../../ui/button";
import { useLocale } from "@/app/providers/locale-provider";
import { useCms, useCmsContent } from "@/app/providers/cms-provider";

export default function StoreItem({ itemId }: { itemId: string }) {
  const { locale } = useLocale();
  const { cms } = useCms();
  const item = useCmsContent("store", locale).items.find(
    (it) => it.id === itemId,
  );
  const salesEmail =
    cms.cmsUsers.find((u) => u.role === "Sales")?.email ??
    "sales@staron-egypt.com";
  const [color, setColor] = useState(item?.colors[0] ?? "");

  if (!item) {
    return (
      <SectionShell>
        <p className="text-text-muted">
          {locale === "en" ? "Item not found." : "العنصر غير موجود."}
        </p>
      </SectionShell>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <SectionShell>
        <SectionHeading
          eyebrow={locale === "en" ? "Store item" : "عنصر متجر"}
          title={item.name}
          description={item.description}
        />
        <Card>
          <h3 className="text-lg font-semibold text-text-main">
            {locale === "en" ? "Select color" : "اختار اللون"}
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {item.colors.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setColor(c)}
                className={`rounded-full border px-3 py-2 text-sm ${
                  color === c
                    ? "border-primary text-primary"
                    : "border-border-subtle text-text-main"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="mt-4 flex gap-3">
            <Button
              onClick={() => {
                const subject =
                  locale === "en"
                    ? `Store item request: ${item.name}`
                    : `طلب متجر: ${item.name}`;
                const body = encodeURIComponent(
                  `Item: ${item.name}\nColor: ${color}`,
                );
                window.location.href = `mailto:${salesEmail}?subject=${encodeURIComponent(
                  subject,
                )}&body=${body}`;
              }}
            >
              {locale === "en" ? "Request via email" : "اطلب بالإيميل"}
            </Button>
            <Button variant="outline" href="/store">
              {locale === "en" ? "Back to store" : "رجوع للمتجر"}
            </Button>
          </div>
        </Card>
      </SectionShell>
    </div>
  );
}
