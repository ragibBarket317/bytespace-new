import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const shapes = [
  { src: "shape-squiggle-lime-lg", w: 267, h: 225, top: 0, left: 0 },
  { src: "shape-squiggle-white-sm", w: 177, h: 176, top: 5, left: 178 },
  { src: "shape-cone-white-sm", w: 140, h: 189, top: 225, left: 0 },
  { src: "shape-ring-lime", w: 346, h: 190, top: 299, left: 16 },
  { src: "shape-cone-lime", w: 190, h: 189, top: 0, right: 172 },
  { src: "shape-blob-white", w: 218, h: 372, top: 5, right: 0 },
  { src: "shape-squiggle-lime-br", w: 334, h: 199, top: 289, right: 0 },
] as const;

export function CreatorCta() {
  return (
    <div style={{ containerType: "inline-size" }}>
      <section
        className="bg-primary text-surface-alt relative overflow-hidden py-16 text-center [--grid:120px] [--line:2px] lg:min-h-[calc(488*var(--u))] lg:py-0 lg:[--grid:calc(120*var(--u))] lg:[--line:calc(2*var(--u))]"
        style={
          {
            "--u": "max(calc(min(100cqw, 1440px) / 1440), 0.5px)",
            backgroundImage:
              "linear-gradient(to right, rgb(255 255 255 / .12) var(--line), transparent var(--line)), linear-gradient(to bottom, rgb(255 255 255 / .12) var(--line), transparent var(--line))",
            backgroundSize: "var(--grid) var(--grid)",
            backgroundPosition: "calc(50% + var(--grid) / 2) calc(0px - var(--line))",
          } as React.CSSProperties
        }
      >
        <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
          {shapes.map(({ src, w, h, top, ...pos }) => (
            <Image
              key={src}
              src={`/images/home/${src}.png`}
              alt=""
              width={w}
              height={h}
              className="absolute max-w-none"
              style={{
                top: `calc(${top} * var(--u))`,
                width: `calc(${w} * var(--u))`,
                height: `calc(${h} * var(--u))`,
                ...("left" in pos
                  ? { left: `calc(${pos.left} * var(--u))` }
                  : { right: `calc(${pos.right} * var(--u))` }),
              }}
            />
          ))}
        </div>

        <Container className="relative max-w-[1000px] lg:max-w-none lg:px-0 lg:pt-[calc(86*var(--u))]">
          <h2 className="font-heading text-surface-alt mx-auto max-w-[710px] text-[clamp(1.75rem,5vw,2.75rem)] leading-[120%] font-semibold tracking-[-0.44px] lg:text-[length:calc(44*var(--u))]">
            Unlock Your Potential as a <br className="hidden md:block" />
            Creator with ByteSpace
          </h2>

          <p className="text-surface-alt mx-auto mt-6 max-w-[965px] px-4 text-base leading-relaxed sm:text-lg lg:mt-[calc(40*var(--u))] lg:max-w-[calc(964*var(--u))] lg:px-0 lg:text-[length:max(15px,calc(18*var(--u)))] lg:leading-[160%]">
            Experience the collaboration of numerous creators and an expanding selection
            of courses. Register now and become a part of a community comprising over
            10,000 local and international creators. Utilize our Course Editor, and
            showcase your expertise by publishing your finest course on the ByteSpace
            Course Library.
          </p>

          <Button
            href="/join-creator"
            size="lg"
            className="mt-8 h-[46px] rounded-[24px] bg-[#D4FB20] px-6 text-[18px] font-medium whitespace-nowrap text-[#242528] hover:bg-[#D4FB20] lg:mt-[calc(40*var(--u))] lg:h-[calc(46*var(--u))] lg:w-[calc(172*var(--u))] lg:px-[calc(24*var(--u))] lg:text-[length:max(14px,calc(18*var(--u)))]"
          >
            Join as Creator
          </Button>
        </Container>
      </section>
    </div>
  );
}
