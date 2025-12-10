"use client";

import Link from "next/link";
import { Card } from "../../ui/card";
import { SectionHeading, SectionShell } from "../../ui/section";
import { Button } from "../../ui/button";
import { useLocale } from "@/app/providers/locale-provider";
import { useCmsContent } from "@/app/providers/cms-provider";

export default function ProductDetail({
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
          {locale === "en" ? "Product not found." : "المنتج غير موجود."}
        </p>
      </SectionShell>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <SectionShell>
        <SectionHeading
          eyebrow={`${material.name} · ${brand.name}`}
          title={product.name}
          description={product.description}
        />
        <div className="grid gap-4 lg:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold text-text-main">
              {locale === "en" ? "Strengths" : "نقاط القوة"}
            </h3>
            <ul className="mt-2 space-y-2 text-sm text-text-muted">
              {product.strengths.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-text-main">
              {locale === "en" ? "Technical specs" : "المواصفات الفنية"}
            </h3>
            <ul className="mt-2 space-y-2 text-sm text-text-muted">
              {product.specs.map((item) => (
                <li key={item} className="rounded-lg bg-background-soft px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex gap-3">
              <Button
                variant="outline"
                href={`/brands/${materialId}/${brandId}/${productId}/colors`}
              >
                {locale === "en" ? "All colors" : "كل الألوان"}
              </Button>
              <Button href="/catalog">
                {locale === "en" ? "Add to catalog" : "أضف للكتالوج"}
              </Button>
            </div>
          </Card>
        </div>
      </SectionShell>

      <SectionShell background="soft">
        <SectionHeading
          eyebrow={locale === "en" ? "Colors" : "الألوان"}
          title={
            locale === "en"
              ? "Featured colors for this product"
              : "أبرز الألوان للمنتج"
          }
        />
        <div className="grid gap-3 sm:grid-cols-3">
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
        <Link
          href={`/brands/${materialId}/${brandId}/${productId}/colors`}
          className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
        >
          {locale === "en" ? "View all colors" : "عرض كل الألوان"}
        </Link>
      </SectionShell>
    </div>
  );
}
