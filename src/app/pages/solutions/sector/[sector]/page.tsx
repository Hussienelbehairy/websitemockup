import SectorDetail from "@/app/components/sections/solutions/SectorDetail";

export default function SectorPage({
  params,
}: {
  params: { sector: string };
}) {
  return <SectorDetail sectorId={params.sector} />;
}
