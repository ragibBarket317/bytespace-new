import Image from "next/image";
import { LevelIcon, StarIcon } from "@/components/icons";
import { cn } from "@/lib/cn";
import type { Course } from "@/types";

// Figma: প্রতিটা avatar 32×32, একটার উপর আরেকটা 8px overlap, শেষে 32×32 "26+" bubble
const courseAvatars = [1, 2, 3, 4].map(
  (n) => `/images/common/course-avatars/avatar-${n}.png`,
);

export function CourseCard({
  course,
  showMeta = false,
  starClassName,
  avatarsTone = "lime",
  fluid = false,
}: {
  course: Course;
  showMeta?: boolean;
  starClassName?: string;
  avatarsTone?: "lime" | "dark";
  fluid?: boolean;
}) {
  return (
    <article
      className={cn(
        "rounded-[24px] border border-[#CED0D3] bg-white p-[16px]",
        fluid ? "h-auto xl:h-[384px]" : "h-[384px]",
      )}
    >
      <div className="relative">
        <Image
          src={course.image}
          alt={course.title}
          width={341}
          height={195}
          className={cn(
            "h-[195.14px] w-full rounded-[12px] object-cover",
            fluid && "aspect-[341/195.14] h-auto xl:h-[195.14px]",
          )}
        />

        {showMeta && (
          <div className="text-body absolute bottom-3 left-3 flex gap-2 text-[13px]">
            {[`${course.lessons} Lessons`, course.duration].map((t) => (
              <span
                key={t}
                className="inline-flex h-[33px] items-center rounded-(--radius-pill) bg-white/60 px-3 backdrop-blur-sm"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="mt-[18px] flex items-center justify-between gap-3">
        <h3 className="font-heading min-w-0 truncate text-[20px] leading-[120%] font-semibold tracking-[-0.2px] text-black">
          {course.title}
        </h3>

        <span className="flex shrink-0 items-center gap-1 text-[18px] leading-[160%] font-normal text-[#4F4F4F]">
          {course.rating}
          <StarIcon className={cn("size-[16px] text-[#CED0D3]", starClassName)} />
        </span>
      </div>

      <p className="text-[12px] leading-[160%] text-[#4F4F4F]">
        by <span className="text-primary">{course.author}</span>
      </p>

      <div className="mt-[17px] flex items-center gap-3">
        <span className="bg-surface-alt inline-flex h-[32px] min-w-[97px] items-center justify-center gap-1 rounded-[24px] px-3 py-[6px] text-[12px] leading-[120%] font-medium text-[#4B4C53]">
          <LevelIcon className="size-3.5" />
          {course.level}
        </span>

        <div className="flex shrink-0 items-center" aria-hidden>
          {courseAvatars.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt=""
              width={32}
              height={32}
              className={cn("size-8 shrink-0 rounded-full", i > 0 && "-ml-2")}
            />
          ))}

          <span
            className={cn(
              "-ml-2 flex size-8 shrink-0 items-center justify-center rounded-full text-[12px] leading-none font-medium",
              avatarsTone === "dark" ? "bg-black text-white" : "bg-accent text-[#242528]",
            )}
          >
            26+
          </span>
        </div>
      </div>

      <p className="mt-[15px] leading-[120%]">
        <span className="font-heading text-primary text-[20px] leading-[120%] font-semibold tracking-[-0.2px]">
          ${course.price}
        </span>

        <span className="text-[12px] leading-[160%] text-[#4F4F4F]">/lifetime</span>
      </p>
    </article>
  );
}
