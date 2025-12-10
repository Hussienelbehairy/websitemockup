"use client";

import { Card } from "../../ui/card";
import { SectionHeading, SectionShell } from "../../ui/section";
import { useLocale } from "@/app/providers/locale-provider";
import { useCmsContent } from "@/app/providers/cms-provider";

export default function ProductColors({
  materialId,
  brandId,
  productId,
}: {
  materialId: string;
  brandId: string;
  productId: string;
}) {
  const { locale } = useLocale();
  const material = useCmsContent("brands", locale).materials.find(
    (m) => m.id === materialId,
  );
  const brand = material?.brands.find((b) => b.id === brandId);
  const product = brand?.products.find((p) => p.id === productId);

  if (!material || !brand || !product) {
    return (
      <SectionShell>
        <p className="text-text-muted">
          {locale === "en" ? "Colors not found." : "الألوان غير متاحة."}
        </p>
      </SectionShell>
    );
  }

  return (
    <SectionShell>
      <SectionHeading
        eyebrow={`${material.name} · ${brand.name}`}
        title={product.name}
        description={
          locale === "en"
            ? "All available colors for this product."
            : "كل الألوان المتاحة للمنتج."
        }
      />
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {product.colors.map((color) => (
          <Card key={color.code}>
            <div
              className="h-24 w-full rounded-xl border border-border-subtle"
              style={{ background: color.swatch }}
            />
            <p className="mt-2 text-sm font-semibold text-text-main">
              {color.name}
            </p>
            <p className="text-xs text-text-muted">{color.code}</p>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
