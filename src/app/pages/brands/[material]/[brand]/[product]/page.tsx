import ProductDetail from "@/app/components/sections/brands/ProductDetail";

export default function ProductPage({
  params,
}: {
  params: { material: string; brand: string; product: string };
}) {
  return (
    <ProductDetail
      materialId={params.material}
      brandId={params.brand}
      productId={params.product}
    />
  );
}
