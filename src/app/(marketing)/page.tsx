import { FeaturedCourses } from "@/components/sections/home/featured-courses";
import { Hero } from "@/components/sections/home/hero";
import { LearningPaths } from "@/components/sections/home/learning-paths";
import { LogoStrip } from "@/components/sections/home/logo-strip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <FeaturedCourses />
      <LearningPaths />
    </>
  );
}
