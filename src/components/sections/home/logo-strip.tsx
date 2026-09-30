import Image from "next/image";
import { Container } from "@/components/ui/container";
import { logos } from "@/data/home";

export function LogoStrip() {
  return (
    <section className="bg-surface-alt py-10 md:flex md:h-[202px] md:items-center md:py-0">
      <Container>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-[72px]">
          {logos.map((logo, i) => (
            <li key={i}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={167}
                height={41}
                className="h-auto w-[130px] sm:w-[167px]"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
