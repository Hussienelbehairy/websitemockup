"use client";

import Link from "next/link";
import { Card } from "../../ui/card";
import { SectionHeading, SectionShell } from "../../ui/section";
import { Button } from "../../ui/button";
import { useLocale } from "@/app/providers/locale-provider";
import { useCmsContent } from "@/app/providers/cms-provider";

export default function MaterialDetail({ materialId }: { materialId: string }) {
  const { locale } = useLocale();
  const material = useCmsContent("brands", locale).materials.find(
    (m) => m.id === materialId,
  );

  if (!material) {
    return (
      <SectionShell>
        <p className="text-text-muted">
          {locale === "en" ? "Material not found." : "الخامة غير موجودة."}
        </p>
      </SectionShell>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <SectionShell>
        <SectionHeading
          eyebrow={locale === "en" ? "Material" : "الخامة"}
          title={material.name}
          description={material.description}
        />
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <Card>
            <h3 className="text-lg font-semibold text-text-main">
              {locale === "en" ? "Best uses" : "أفضل الاستخدامات"}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {material.bestUses.map((use) => (
                <span
                  key={use}
                  className="rounded-full bg-background-soft px-3 py-1 text-sm text-text-main"
                >
                  {use}
                </span>
              ))}
            </div>
            <h3 className="mt-4 text-lg font-semibold text-text-main">
              {locale === "en" ? "Quality indicators" : "مؤشرات الجودة"}
            </h3>
            <ul className="mt-2 space-y-2 text-sm text-text-muted">
              {material.quality.map((q) => (
                <li key={q} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-text-main">
              {locale === "en" ? "History" : "التاريخ"}
            </h3>
            <p className="text-sm text-text-muted">{material.history}</p>
            <h3 className="mt-4 text-lg font-semibold text-text-main">
              {locale === "en" ? "Related articles" : "مقالات مرتبطة"}
            </h3>
            <div className="mt-2 flex flex-col gap-2">
              {material.blog.map((post) => (
                <Link
                  key={post}
                  href={post}
                  className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
                >
                  {post}
                </Link>
              ))}
            </div>
          </Card>
        </div>
      </SectionShell>

      <SectionShell background="soft">
        <SectionHeading
          eyebrow={locale === "en" ? "Brands" : "البراندات"}
          title={
            locale === "en" ? "Brands under this material" : "البراندات تحت الخامة"
          }
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {material.brands.map((brand) => (
            <Card key={brand.id} interactive>
              <h3 className="text-xl font-semibold text-text-main">
                {brand.name}
              </h3>
              <p className="text-sm text-text-muted">{brand.intro}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {brand.products.map((product) => (
                  <span
                    key={product.id}
                    className="rounded-full bg-background-soft px-3 py-1 text-xs font-semibold text-text-main"
                  >
                    {product.name}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-3">
                <Button href={`/brands/${material.id}/${brand.id}`}>
                  {locale === "en" ? "Open brand" : "افتح البراند"}
                </Button>
                <Button variant="outline" href="/catalog">
                  {locale === "en" ? "Catalog" : "كتالوج"}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </SectionShell>
    </div>
  );
}
