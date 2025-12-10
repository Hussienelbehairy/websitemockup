import SpaceDetail from "@/app/components/sections/solutions/SpaceDetail";

export default function SpacePage({
  params,
}: {
  params: { space: string };
}) {
  return <SpaceDetail spaceId={params.space} />;
}
