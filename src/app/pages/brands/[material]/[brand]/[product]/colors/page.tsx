import ProductColors from "@/app/components/sections/brands/ProductColors";

export default function ProductColorsPage({
  params,
}: {
  params: { material: string; brand: string; product: string };
}) {
  return (
    <ProductColors
      materialId={params.material}
      brandId={params.brand}
      productId={params.product}
    />
  );
}
