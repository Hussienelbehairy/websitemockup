import HeroSlider from "@/app/components/sections/home/HeroSlider";
import ScopeGrid from "@/app/components/sections/home/ScopeGrid";
import FlagshipProject from "@/app/components/sections/home/FlagshipProject";
import MaterialHighlights from "@/app/components/sections/home/MaterialHighlights";
import Testimonials from "@/app/components/sections/home/Testimonials";
import CeoBlock from "@/app/components/sections/home/CeoBlock";
import RecentPosts from "@/app/components/sections/home/RecentPosts";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-4">
      <HeroSlider />
      <ScopeGrid />
      <FlagshipProject />
      <MaterialHighlights />
      <Testimonials />
      <CeoBlock />
      <RecentPosts />
    </div>
  );
}
