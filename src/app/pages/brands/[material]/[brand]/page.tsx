import BrandDetail from "@/app/components/sections/brands/BrandDetail";

export default function BrandPage({
  params,
}: {
  params: { material: string; brand: string };
}) {
  return (
    <BrandDetail materialId={params.material} brandId={params.brand} />
  );
}
