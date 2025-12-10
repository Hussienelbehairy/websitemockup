"use client";

import { useMemo, useState } from "react";
import { Card } from "../../ui/card";
import { SectionHeading, SectionShell } from "../../ui/section";
import { Button } from "../../ui/button";
import { useLocale } from "@/app/providers/locale-provider";
import { useCms, useCmsContent } from "@/app/providers/cms-provider";

export default function StorePage() {
  const { locale } = useLocale();
  const { cms } = useCms();
  const content = useCmsContent("store", locale);
  const salesEmail =
    cms.cmsUsers.find((u) => u.role === "Sales")?.email ??
    "sales@staron-egypt.com";
  const [cart, setCart] = useState<string[]>([]);

  const summary = useMemo(
    () => cart.map((id) => content.items.find((item) => item.id === id)).filter(Boolean),
    [cart, content.items],
  );

  const submitRequest = () => {
    const subject =
      locale === "en"
        ? "Store request (no payment)"
        : "طلب متجر بدون دفع";
    const body = encodeURIComponent(
      summary
        .map((item) => `${item?.name} - Colors: ${(item?.colors ?? []).join(", ")}`)
        .join("\n"),
    );
    window.location.href = `mailto:${salesEmail}?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <div className="flex flex-col gap-6">
      <SectionShell>
        <div className="flex items-center justify-between gap-4">
          <SectionHeading
            eyebrow={locale === "en" ? "Online Store" : "المتجر الإلكتروني"}
            title={content.title}
            description={content.description}
          />
          <Button variant="outline" href="/contact">
            {locale === "en" ? "Need help?" : "محتاج مساعدة؟"}
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {content.items.map((item) => (
            <Card key={item.id} interactive>
              <h3 className="text-lg font-semibold text-text-main">
                {item.name}
              </h3>
              <p className="text-sm text-text-muted">{item.description}</p>
              <p className="text-xs text-text-muted">
                {locale === "en" ? "Colors" : "ألوان"}: {item.colors.join(", ")}
              </p>
              <Button
                variant="outline"
                className="mt-3"
                onClick={() => setCart((prev) => [...prev, item.id])}
              >
                {locale === "en" ? "Add to request" : "أضف للطلب"}
              </Button>
            </Card>
          ))}
        </div>
      </SectionShell>

      <SectionShell background="soft">
        <SectionHeading
          eyebrow={locale === "en" ? "Cart" : "عربة التسوق"}
          title={
            summary.length
              ? locale === "en"
                ? "Items ready to submit"
                : "عناصر جاهزة للإرسال"
              : locale === "en"
                ? "Add items to cart"
                : "أضف عناصر للسلة"
          }
        />
        {summary.length ? (
          <div className="flex flex-col gap-3">
            {summary.map((item) => (
              <Card key={item?.id} className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-text-main">
                    {item?.name}
                  </p>
                  <p className="text-xs text-text-muted">
                    {locale === "en" ? "Colors" : "ألوان"}:{" "}
                    {(item?.colors ?? []).join(", ")}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  onClick={() =>
                    setCart((prev) => prev.filter((id, idx) => idx !== prev.indexOf(item!.id)))
                  }
                >
                  {locale === "en" ? "Remove" : "حذف"}
                </Button>
              </Card>
            ))}
            <Button onClick={submitRequest}>
              {locale === "en"
                ? "Submit email request"
                : "إرسال الطلب بالإيميل"}
            </Button>
          </div>
        ) : (
          <p className="text-sm text-text-muted">
            {locale === "en"
              ? "No items yet. Add from the store grid."
              : "لا يوجد عناصر. أضف من شبكة المتجر."}
          </p>
        )}
      </SectionShell>
    </div>
  );
}
