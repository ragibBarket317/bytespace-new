import Image from "next/image";

import { Container } from "@/components/ui/container";
import { testimonials } from "@/data/home";

const glows = [
  {
    w: 850,
    h: 1137,
    top: 149,
    left: -442,
    color: "0, 59, 226",
    stops: [
      [0.24, "0%"],
      [0.0552, "53%"],
      [0.0144, "75%"],
      [0, "100%"],
    ],
  },
  {
    w: 600,
    h: 250,
    top: 40,
    left: 420,
    color: "203, 252, 1",
    stops: [
      [0.7, "0%"],
      [0.138, "53%"],
      [0.036, "75%"],
      [0, "100%"],
    ],
  },
  {
    w: 400,
    h: 850,
    top: -150,
    left: 1200,
    color: "203, 252, 1",
    stops: [
      [0.25, "0%"],
      [0.095, "53%"],
      [0.024, "75%"],
      [0, "100%"],
    ],
  },
] as const;

const glowGradient = (color: string, stops: readonly (readonly [number, string])[]) =>
  `radial-gradient(circle, ${stops
    .map(([alpha, pos]) => `rgba(${color}, ${alpha}) ${pos}`)
    .join(", ")})`;

export function Testimonials() {
  return (
    <section
      className="relative overflow-hidden bg-[#fafafa] pt-14 pb-20 md:pt-[74px] md:pb-[57px]"
      style={
        {
          "--u": "max(calc(min(100vw, 1440px) / 1440), 0.5px)",
        } as React.CSSProperties
      }
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 mx-auto max-w-[1440px]"
      >
        {glows.map((g, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `calc(${g.w} * var(--u))`,
              height: `calc(${g.h} * var(--u))`,
              top: `calc(${g.top} * var(--u))`,
              left: `calc(${g.left} * var(--u))`,
              background: glowGradient(g.color, g.stops),
              filter: "blur(40px)",
            }}
          />
        ))}
      </div>

      <Container className="relative max-w-[1252px]">
        {/* Header */}
        <div className="grid gap-5 text-center lg:grid-cols-2 lg:items-end lg:gap-x-9 lg:text-left">
          <h2 className="font-heading mx-auto max-w-[577px] text-[30px] leading-[120%] font-semibold tracking-[-0.3px] text-black sm:text-[36px] lg:mx-0 lg:translate-y-[1.5px] lg:text-[44px] lg:tracking-[-0.44px]">
            Discover What Our <br className="hidden sm:block" />
            Community Is Saying
          </h2>

          <p className="mx-auto max-w-[584px] text-base leading-[26px] text-[#4F4F4F] sm:text-[18px] sm:leading-[29px] lg:mx-0">
            At ByteSpace, our vibrant community of learners and creators is at the heart
            of what we do. Hear directly from those who have experienced the
            transformative journey of learning and creating on our platform. Explore
            testimonials that reflect the diverse perspectives of enthusiastic learners
            and accomplished creators.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="mx-auto mt-10 grid max-w-[640px] items-start gap-6 lg:mt-[72px] lg:max-w-none lg:grid-cols-3 lg:gap-[41px]">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-[24px] bg-white p-5 sm:p-[24px]">
              <Image
                src={t.avatar}
                alt={t.name}
                width={80}
                height={80}
                className="size-[80px] rounded-full"
              />

              <figcaption className="mt-6">
                <p className="font-heading text-[20px] leading-[120%] font-semibold tracking-[-0.2px] text-black">
                  {t.name}
                </p>

                <p className="text-primary mt-1 text-base leading-[29px] font-normal sm:text-[18px]">
                  {t.role}
                </p>
              </figcaption>

              <blockquote className="mt-6 text-base leading-[27px] font-normal text-[#4F4F4F] sm:text-[18px] sm:leading-[29px]">
                &quot;{t.quote}&quot;
              </blockquote>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
