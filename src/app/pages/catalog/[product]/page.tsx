import CatalogItem from "@/app/components/sections/catalog/CatalogItem";

export default function CatalogProductPage({
  params,
}: {
  params: { product: string };
}) {
  return <CatalogItem productId={params.product} />;
}
