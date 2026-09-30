import Image from "next/image";
import { CourseCard } from "@/components/common/course-card";
import { DesignStage } from "@/components/common/design-stage";
import { HappyStudentsCard } from "@/components/common/happy-students-card";
import { courses } from "@/data/home";
import { place } from "@/lib/design-units";
import { cn } from "@/lib/cn";

export const SHOWCASE_SIZE = { width: 548, height: 585 } as const;

const boxes = {
  backCard: [25, 90, 373, 384],
  frontCard: [136, 0, 373, 384],
  happyStudents: [251, 435, 258, 123],
  ring: [54, 16, 147, 147],
  cone: [-1, 400, 190, 189],
  squiggle: [372, 321, 177, 176],
} as const;

const [backCourse, frontCourse] = [courses[1], courses[2]];

interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export function SignupShowcase({ className, style }: Props) {
  return (
    <DesignStage
      aria-hidden
      {...SHOWCASE_SIZE}
      className={cn("pointer-events-none select-none", className)}
      style={style}
    >
      <div className="absolute" style={place(boxes.backCard)}>
        <CourseCard
          course={backCourse}
          starClassName="size-6 text-accent"
          avatarsTone="dark"
        />
      </div>

      <div className="absolute" style={place(boxes.frontCard)}>
        <CourseCard
          course={frontCourse}
          starClassName="size-6 text-accent"
          avatarsTone="dark"
        />
      </div>

      <HappyStudentsCard
        tone="lime"
        avatarSize={42}
        avatarOverlap={-14.86}
        className="absolute"
        style={place(boxes.happyStudents)}
      />

      <Image
        src="/images/auth/shape-ring.png"
        alt=""
        width={147}
        height={147}
        className="absolute max-w-none"
        style={place(boxes.ring)}
      />
      <Image
        src="/images/auth/shape-cone.png"
        alt=""
        width={190}
        height={189}
        className="absolute max-w-none"
        style={place(boxes.cone)}
      />
      <Image
        src="/images/auth/shape-squiggle.png"
        alt=""
        width={177}
        height={176}
        className="absolute max-w-none"
        style={place(boxes.squiggle)}
      />
    </DesignStage>
  );
}
