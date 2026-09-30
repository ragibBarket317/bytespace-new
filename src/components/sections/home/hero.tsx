import Image from "next/image";
import { HappyStudentsCard } from "@/components/common/happy-students-card";
import { LearningProgressCard } from "@/components/common/learning-progress-card";
import { SearchIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { learningProgress } from "@/data/home";
import { u } from "@/lib/design-units";

type Box = readonly [number, number, number, number];

const at = ([x, y, w, h]: Box, side: "left" | "right" | "center" = "center") => ({
  ...(side === "left" && { left: `calc(${x} * var(--u))` }),
  ...(side === "right" && { right: `calc(${1440 - x - w} * var(--u))` }),
  ...(side === "center" && { left: `calc(50% + ${x - 720} * var(--u))` }),
  bottom: `calc(${1024 - y - h} * var(--u))`,
  width: `calc(${w} * var(--u))`,
  height: `calc(${h} * var(--u))`,
});

const shapes = [
  { src: "shape-squiggle-lime", box: [0, 270, 210, 295], side: "left", hideOnMobile: true },
  { src: "shape-squiggle-sm", box: [175, 477, 177, 176], side: "left" },
  { src: "shape-ring", box: [50, 681, 344, 343], side: "left" },
  { src: "shape-cylinder", box: [1227, 220, 213, 372], side: "right", hideOnMobile: true },
  { src: "shape-cone", box: [1094, 463, 190, 189], side: "right" },
  { src: "shape-squiggle-white", box: [1150, 700, 205, 265], side: "right" },
] as const;

export function Hero() {
  return (
    <section
      className="bg-primary relative overflow-hidden text-center text-white"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgb(255 255 255 / .12) 2px, transparent 2px), linear-gradient(to bottom, rgb(255 255 255 / .12) 2px, transparent 2px)",
        backgroundSize: "120px 120px",
        backgroundPosition: "0 118px",
      }}
    >
      <div
        className="mx-auto w-full max-w-[1199px] px-4 pt-[clamp(120px,11.8vw,170px)]"
        style={
          {
            "--u": "max(calc(min(100vw, 1440px) / 1440), 0.5px)",
            minHeight: "max(calc(1024 * var(--u)), 720px)",
          } as React.CSSProperties
        }
      >
        {/* Decorative layer */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div
            className="bg-accent absolute rounded-full"
            style={at([146, 582, 1148, 1148])}
          />
          <Image
            src="/images/home/hero-person.png"
            alt=""
            width={722}
            height={515}
            priority
            className="absolute max-w-none"
            style={at([415, 508, 722, 515])}
          />
          {shapes.map(({ src, box, side, ...rest }) => (
            <Image
              key={src}
              src={`/images/home/${src}.png`}
              alt=""
              width={box[2]}
              height={box[3]}
              className={
                "hideOnMobile" in rest ? "absolute hidden max-w-none md:block" : "absolute max-w-none"
              }
              style={at(box, side)}
            />
          ))}
          {/* "UI/UX Design" topic card */}
          <div
            className="absolute hidden flex-col justify-center rounded-[16px] bg-white text-left shadow-(--shadow-float) backdrop-blur-[20px] md:flex"
            style={{
              ...at([404, 639, 208, 70]),
              padding: u(16),
              gap: u(8),
            }}
          >
            <p
              className="text-ink leading-[120%] font-medium"
              style={{ fontSize: u(16) }}
            >
              UI/UX Design
            </p>

            <p
              className="whitespace-nowrap text-[#82868E]"
              style={{
                fontSize: u(12),
                lineHeight: 1.6,
              }}
            >
              200 Courses <span className="px-0.5">•</span> 1000+ Students
            </p>
          </div>

          <LearningProgressCard
            value={learningProgress}
            className="absolute hidden md:flex"
            style={at([842, 651, 232, 131])}
          />
          <HappyStudentsCard
            className="absolute hidden md:flex"
            style={at([328, 837, 258, 123])}
          />
        </div>

        {/* Content */}
        {/* <div className="relative z-10">
          <h1 className="font-heading mx-auto max-w-[900px] text-[clamp(2.25rem,4.93vw,71px)] leading-[1.2] font-medium text-white">
            Get Access to Hundreds Courses Available
          </h1>
          <p className="mx-auto mt-[clamp(20px,2.4vw,34px)] max-w-[880px] text-[clamp(15px,1.18vw,17px)] leading-7 text-white">
            Unlock your creativity, gain valuable knowledge, and grow your business with
            our wide range of courses.
          </p>

          <form
            action="/courses"
            role="search"
            className="mx-auto mt-[clamp(28px,4.2vw,60px)] flex max-w-[580px] items-start gap-[17px]"
          >
            <label className="relative block h-[52px] flex-1">
              <span className="sr-only">Search courses</span>
              <SearchIcon className="text-muted absolute top-1/2 left-[26px] size-5 -translate-y-1/2" />
              <input
                type="search"
                name="q"
                placeholder="Course, topic, creator"
                className="text-ink placeholder:text-muted h-full w-full rounded-(--radius-pill) bg-white pr-6 pl-[56px] outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              />
            </label>
            <Button
              type="submit"
              size="md"
              className="h-[46px] px-6 text-base font-normal"
            >
              Search
            </Button>
          </form>
        </div> */}
        <div className="relative z-10">
          <h1 className="font-heading mx-auto max-w-[935px] text-[clamp(2rem,5vw,72px)] leading-[1.2] font-semibold tracking-[-0.72px] text-white">
            Get Access to Hundreds Courses Available
          </h1>

          <p className="mx-auto mt-[clamp(20px,2.4vw,34px)] max-w-[819px] text-base leading-[160%] text-[#E5E6E8] sm:text-[18px]">
            Unlock your creativity, gain valuable knowledge, and grow your business with
            our wide range of courses.
          </p>

          <form
            action="/courses"
            role="search"
            className="mx-auto mt-[clamp(28px,4.2vw,60px)] flex max-w-[581px] items-start gap-3 sm:gap-4"
          >
            <label className="relative block h-[52px] min-w-0 flex-1">
              <span className="sr-only">Search courses</span>

              <SearchIcon className="text-muted absolute top-1/2 left-[18px] size-5 -translate-y-1/2 sm:left-[26px]" />

              <input
                type="search"
                name="q"
                placeholder="Course, topic, creator"
                className="text-ink placeholder:text-muted h-full w-full rounded-[24px] bg-white pr-4 pl-[46px] text-base leading-[160%] outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:pr-6 sm:pl-[56px] sm:text-[18px]"
              />
            </label>

            <Button
              type="submit"
              size="md"
              className="h-[46px] w-[92px] shrink-0 px-4 text-base font-normal sm:w-[104px] sm:px-6 sm:text-[18px]"
            >
              Search
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
