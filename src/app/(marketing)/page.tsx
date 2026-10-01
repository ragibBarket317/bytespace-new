import { CreatorCta } from "@/components/sections/home/creator-cta";
import { FeaturedCourses } from "@/components/sections/home/featured-courses";
import { GrowthCreator } from "@/components/sections/home/growth-creator";
import { Hero } from "@/components/sections/home/hero";
import { LearningPaths } from "@/components/sections/home/learning-paths";
import { LogoStrip } from "@/components/sections/home/logo-strip";
import { Testimonials } from "@/components/sections/home/testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <FeaturedCourses />
      <LearningPaths />
      <GrowthCreator />
      <CreatorCta />
      <Testimonials />
    </>
  );
}
