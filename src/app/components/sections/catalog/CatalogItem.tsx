"use client";

import { Card } from "../../ui/card";
import { SectionHeading, SectionShell } from "../../ui/section";
import { Button } from "../../ui/button";
import { useLocale } from "@/app/providers/locale-provider";
import { useCmsContent } from "@/app/providers/cms-provider";

export default function CatalogItem({ productId }: { productId: string }) {
  const { locale } = useLocale();
  const product = useCmsContent("catalog", locale).products.find(
    (p) => p.id === productId,
  );

  if (!product) {
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
          eyebrow={product.material}
          title={product.name}
          description={product.description}
        />
        <Card>
          <p className="text-sm text-text-muted">
            {locale === "en"
              ? "Colors available"
              : "الألوان المتاحة"}: {product.colors}
          </p>
          <p className="text-sm text-text-muted">
            {locale === "en" ? "Brand" : "البراند"}: {product.brand}
          </p>
          <div className="mt-4 flex gap-3">
            <Button href="/contact">
              {locale === "en" ? "Request quotation" : "طلب تسعير"}
            </Button>
            <Button variant="outline" href="/store">
              {locale === "en" ? "Find ready items" : "ابحث في المتجر"}
            </Button>
          </div>
        </Card>
      </SectionShell>
    </div>
  );
}
