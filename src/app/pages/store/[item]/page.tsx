import StoreItem from "@/app/components/sections/store/StoreItem";

export default function StoreItemPage({
  params,
}: {
  params: { item: string };
}) {
  return <StoreItem itemId={params.item} />;
}
