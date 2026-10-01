import Image from "next/image";
import { CheckCircleIcon } from "@/components/icons";
import { CourseCard } from "@/components/common/course-card";
import { DesignStage } from "@/components/common/design-stage";
import { HappyStudentsCard } from "@/components/common/happy-students-card";
import { LearningProgressCard } from "@/components/common/learning-progress-card";
import { RevenueCard } from "@/components/common/revenue-card";
import { Container } from "@/components/ui/container";
import { courses, creatorPerks, growthStats, learningProgress } from "@/data/home";
import { place } from "@/lib/design-units";

const glow = [
  "radial-gradient(ellipse 400px 280px at 400px 110px, rgb(232 251 150 / .95), transparent)",
  "radial-gradient(ellipse 320px 240px at right 60px top 40px, rgb(228 232 248 / .9), transparent)",
  "radial-gradient(ellipse 300px 300px at left -20px top 730px, rgb(208 218 247 / .95), transparent)",
  "radial-gradient(ellipse 320px 240px at left -40px bottom 170px, rgb(222 251 100 / .95), transparent)",
  "radial-gradient(ellipse 460px 300px at right 120px bottom 90px, rgb(188 203 244 / .95), transparent)",
].join(",");

const Z = {
  behind: 1,
  person: 2,
  card: 3,
  shape: 4,
} as const;

const growthHeading =
  "font-heading mx-auto max-w-[577px] text-[30px] leading-[120%] font-semibold tracking-[-0.3px] text-[#242528] sm:text-[36px] lg:mx-0 lg:text-[44px] lg:tracking-[-0.44px]";

const creatorHeading =
  "font-heading mx-auto max-w-[391px] text-[30px] leading-[120%] font-semibold tracking-[-0.3px] text-[#242528] sm:text-[36px] lg:mx-0 lg:text-[44px] lg:tracking-[-0.44px]";

export function GrowthCreator() {
  return (
    <section
      className="relative overflow-hidden bg-[#fafafa] pt-14 lg:pt-[120px]"
      style={{ backgroundImage: glow }}
    >
      <Container>
        {/* Row 1 — Growth */}
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-0">
          <div className="text-center lg:pt-[74px] lg:text-left">
            <h2 className={growthHeading}>
              Your Path to Professional{" "}
              <br className="hidden sm:block" />
              Growth Starts Here!
            </h2>

            <p className="mx-auto mt-6 max-w-[477px] text-base leading-[160%] text-[#4B4C53] sm:text-[18px] lg:mx-0 lg:mt-10">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are looking to
              sharpen specific skills, gain industry expertise, or embark on a new career
              path entirely, we have the resources you need.
            </p>

            <dl className="mt-8 flex justify-center gap-10 sm:gap-14 lg:mt-10 lg:justify-start">
              {growthStats.map((s) => (
                <div key={s.label}>
                  <dd className="font-heading text-primary order-first text-[30px] leading-[40px] sm:text-[36px] sm:leading-[44px] font-medium tracking-[-0.36px]">
                    {s.value}
                  </dd>

                  <dt className="text-base leading-[160%] text-[#4B4C53] sm:text-[18px]">{s.label}</dt>
                </div>
              ))}
            </dl>
          </div>

          <DesignStage
            width={703}
            height={697}
            className="justify-self-center [--fit:min(calc(100vw_-_32px),580px)] lg:ml-[17px] lg:justify-self-start lg:[--fit:calc(50vw_-_17px)]"
          >
            <div
              className="absolute"
              style={{
                left: 22,
                top: 0,
                width: 371,
                zIndex: Z.behind,
              }}
            >
              <CourseCard course={courses[0]} showMeta />
            </div>

            <Image
              src="/images/home/growth-student.png"
              alt="Student learning online with a laptop and headset"
              width={703}
              height={688}
              className="absolute max-w-none"
              style={{
                left: 0,
                top: 9,
                width: 703,
                height: 688,
                zIndex: Z.person,
              }}
            />

            <LearningProgressCard
              value={learningProgress}
              className="absolute"
              style={{
                ...place([366, 213, 232, 137]),
                zIndex: Z.card,
              }}
            />

            <Image
              src="/images/home/shape-squiggle-vertical.png"
              alt=""
              width={217}
              height={216}
              className="absolute max-w-none"
              style={{
                left: 425,
                top: 67,
                width: 217,
                height: 216,
                zIndex: Z.shape,
              }}
            />
          </DesignStage>
        </div>

        {/* Row 2 — Creator */}
        <div className="mt-4 grid items-start gap-8 pb-14 lg:mt-10 lg:grid-cols-2 lg:gap-0 lg:pb-14 xl:-mt-[76px] xl:pb-0">
          <DesignStage
            width={587}
            height={719}
            className="justify-self-center [--fit:min(calc(100vw_-_32px),580px)] lg:ml-px lg:justify-self-start lg:[--fit:calc(50vw_-_120px)]"
          >
            <RevenueCard
              title="Total Revenue"
              period="July 1-28"
              amount="$120.29"
              progress={58}
              className="absolute"
              style={{
                ...place([0, 44, 232, 119]),
                zIndex: Z.behind,
              }}
            />

            <RevenueCard
              title="Year to Date"
              period="2023"
              amount="$1,200.38"
              badge="+12$"
              className="absolute"
              style={{
                ...place([0, 197, 134, 135]),
                zIndex: Z.behind,
              }}
            />

            <Image
              src="/images/home/creator-instructor.png"
              alt="Instructor with a tablet"
              width={579}
              height={719}
              className="absolute max-w-none"
              style={{
                left: 7,
                top: 0,
                width: 579,
                height: 719,
                zIndex: Z.person,
              }}
            />

            <Image
              src="/images/home/shape-squiggle-tilted.png"
              alt=""
              width={217}
              height={216}
              className="absolute max-w-none"
              style={{
                left: 303,
                top: 117,
                width: 217,
                height: 216,
                zIndex: Z.shape,
              }}
            />

            <HappyStudentsCard
              className="absolute"
              style={{
                ...place([283, 415, 258, 123]),
                zIndex: Z.card,
              }}
            />
          </DesignStage>

          <div className="text-center lg:pt-[108px] lg:pl-[21px] lg:text-left">
            <h2 className={creatorHeading}>
              Create &amp; Manage{" "}
              <br className="hidden sm:block" />
              Courses Easily.
            </h2>

            <p className="mx-auto mt-6 max-w-[560px] text-base leading-[28px] text-[#4B4C53] sm:text-[18px] lg:mx-0 lg:mt-10">
              <strong className="font-bold text-[#4B4C53]">ByteSpace</strong> supports
              individuals or entities in the creation, publication, and administration of
              educational courses.
            </p>

            <ul className="mx-auto mt-8 w-fit space-y-3 text-left lg:mx-0 lg:mt-10">
              {creatorPerks.map((perk) => (
                <li
                  key={perk}
                  className="flex items-center gap-2.5 text-[18px] leading-[120%] font-medium text-[#242528]"
                >
                  <CheckCircleIcon className="size-6 shrink-0" />
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
