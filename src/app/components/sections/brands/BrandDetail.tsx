"use client";

import { Card } from "../../ui/card";
import { SectionHeading, SectionShell } from "../../ui/section";
import { Button } from "../../ui/button";
import { useLocale } from "@/app/providers/locale-provider";
import { useCmsContent } from "@/app/providers/cms-provider";

export default function BrandDetail({
  materialId,
  brandId,
}: {
  materialId: string;
  brandId: string;
}) {
  const { locale } = useLocale();
  const material = useCmsContent("brands", locale).materials.find(
    (m) => m.id === materialId,
  );
  const brand = material?.brands.find((b) => b.id === brandId);

  if (!material || !brand) {
    return (
      <SectionShell>
        <p className="text-text-muted">
          {locale === "en" ? "Brand not found." : "البراند غير موجود."}
        </p>
      </SectionShell>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <SectionShell>
        <SectionHeading
          eyebrow={material.name}
          title={brand.name}
          description={brand.intro}
        />
        <Card>
          <h3 className="text-lg font-semibold text-text-main">
            {locale === "en" ? "Brand history" : "تاريخ البراند"}
          </h3>
          <p className="text-sm text-text-muted">{brand.history}</p>
        </Card>
      </SectionShell>

      <SectionShell background="soft">
        <SectionHeading
          eyebrow={locale === "en" ? "Products" : "المنتجات"}
          title={
            locale === "en"
              ? "Product lines under this brand"
              : "منتجات البراند"
          }
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {brand.products.map((product) => (
            <Card key={product.id} interactive>
              <h3 className="text-xl font-semibold text-text-main">
                {product.name}
              </h3>
              <p className="text-sm text-text-muted">{product.description}</p>
              <div className="mt-3 space-y-1 text-sm text-text-muted">
                {product.strengths.map((strength) => (
                  <div
                    key={strength}
                    className="rounded-lg bg-background-soft px-3 py-1"
                  >
                    {strength}
                  </div>
                ))}
              </div>
              <div className="mt-4 flex gap-3">
                <Button
                  href={`/brands/${materialId}/${brandId}/${product.id}`}
                >
                  {locale === "en" ? "Product page" : "صفحة المنتج"}
                </Button>
                <Button
                  variant="outline"
                  href={`/brands/${materialId}/${brandId}/${product.id}/colors`}
                >
                  {locale === "en" ? "All colors" : "كل الألوان"}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </SectionShell>
    </div>
  );
}
