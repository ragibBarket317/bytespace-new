import Image from "next/image";
import { BuildingIcon } from "@/components/icons";
import { Container } from "@/components/ui/container";
import { learningPaths } from "@/data/home";

export function LearningPaths() {
  return (
    <section className="pt-16 pb-20 md:pt-[72px] md:pb-[114px]">
      <Container>
        <div className="text-center">
          <h2 className="font-heading text-navy mx-auto max-w-[792px] text-[36px] leading-[120%] font-semibold tracking-[-0.36px]">
            Explore Diverse Learning Paths at Bytespace
          </h2>

          <p className="text-subtle mx-auto mt-4 max-w-[917px] text-[18px] leading-[160%]">
            At Bytespace, we believe in empowering individuals through knowledge. Our
            diverse range of courses spans various fields, ensuring there&apos;s something
            for everyone. Unleash your potential and explore our carefully curated
            categories.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:mt-[68px] lg:grid-cols-6 lg:gap-10">
          {learningPaths.map((p) => (
            <li key={p.label}>
              <a
                href="#"
                className="hover:bg-surface-alt flex h-[167px] w-[167px] flex-col items-center justify-center gap-3 rounded-[24px] border border-[#CED0D3] bg-white text-center transition-colors"
              >
                {p.icon ? (
                  <Image src={p.icon} alt="" width={60} height={60} />
                ) : (
                  <span className="bg-accent text-ink grid size-[60px] place-items-center rounded-[40px] p-3">
                    <BuildingIcon className="size-[27px]" />
                  </span>
                )}

                <span className="text-[20px] leading-[120%] font-medium text-[#242528]">
                  {p.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
