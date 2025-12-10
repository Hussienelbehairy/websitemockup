"use client";

import Link from "next/link";
import { Card } from "../../ui/card";
import { SectionHeading, SectionShell } from "../../ui/section";
import { Button } from "../../ui/button";
import { useLocale } from "@/app/providers/locale-provider";
import { useCmsContent } from "@/app/providers/cms-provider";

export default function CatalogPage() {
  const { locale } = useLocale();
  const content = useCmsContent("catalog", locale);

  return (
    <SectionShell>
      <div className="flex items-center justify-between gap-4">
        <SectionHeading
          eyebrow={locale === "en" ? "Catalog" : "كتالوج"}
          title={content.title}
          description={content.description}
        />
        <Button href="/contact">
          {locale === "en" ? "Request pricing" : "طلب تسعير"}
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {content.products.map((product) => (
          <Card key={product.id} interactive>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
              {product.material}
            </p>
            <h3 className="text-lg font-semibold text-text-main">{product.name}</h3>
            <p className="text-sm text-text-muted">{product.description}</p>
            <p className="text-xs text-text-muted">
              {locale === "en" ? "Brand" : "براند"}: {product.brand}
            </p>
            <p className="text-xs text-text-muted">
              {locale === "en" ? "Colors" : "ألوان"}: {product.colors}
            </p>
            <div className="mt-3 flex gap-2">
              <Button variant="outline" href={`/catalog/${product.id}`}>
                {locale === "en" ? "Product page" : "صفحة المنتج"}
              </Button>
              <Link
                href="/store"
                className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                {locale === "en" ? "Shop ready items" : "المتجر"}
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
