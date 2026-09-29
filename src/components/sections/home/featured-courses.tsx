import { CourseCard } from "@/components/common/course-card";
import { Container } from "@/components/ui/container";
import { categoryRows, courses } from "@/data/home";
import { CategoryPills } from "./category-pills";

export function FeaturedCourses() {
  return (
    <section id="courses" className="pt-14 md:pt-[72px]">
      <Container>
        <div className="text-center">
          <h2 className="font-heading text-navy mx-auto max-w-[588px] text-[44px] leading-[120%] font-semibold tracking-[-0.44px]">
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>

          <p className="text-subtle mx-auto mt-4 max-w-[960px] text-[18px] leading-[160%]">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore
            a variety of courses across different fields, from technology to the arts, and
            make a difference in your career and life.
          </p>
        </div>

        <div className="mt-10 md:mt-[43px]">
          <CategoryPills rows={categoryRows} />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-[77px] lg:grid-cols-3 lg:gap-[40px]">
          {courses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      </Container>
    </section>
  );
}
