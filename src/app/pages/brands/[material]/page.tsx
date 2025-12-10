import MaterialDetail from "@/app/components/sections/brands/MaterialDetail";

export default function MaterialPage({
  params,
}: {
  params: { material: string };
}) {
  return <MaterialDetail materialId={params.material} />;
}
