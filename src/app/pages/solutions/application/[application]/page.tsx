import ApplicationDetail from "@/app/components/sections/solutions/ApplicationDetail";

export default function ApplicationPage({
  params,
}: {
  params: { application: string };
}) {
  return <ApplicationDetail applicationId={params.application} />;
}
