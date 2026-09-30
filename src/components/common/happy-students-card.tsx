import Image from "next/image";
import { StarIcon } from "@/components/icons";
import { studentAvatars } from "@/data/home";
import { cn } from "@/lib/cn";
import { u } from "@/lib/design-units";

interface Props {
  rating?: number;
  reviews?: number;
  extra?: string;
  avatars?: string[];
  className?: string;
  style?: React.CSSProperties;
}

const SIZE = 40;
const OVERLAP = -13.5;

export function HappyStudentsCard({
  rating = 4.5,
  reviews = 240,
  extra = "2K+",
  avatars = studentAvatars,
  className,
  style,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-[16px] bg-white text-left shadow-(--shadow-float) backdrop-blur-[20px]",
        className,
      )}
      style={{ padding: u(16), gap: u(8), ...style }}
    >
      <p
        className="font-medium text-[#242528]"
        style={{
          fontSize: u(16),
          lineHeight: 1.2,
        }}
      >
        Happy Students
      </p>

      <p
        className="text-muted flex items-center"
        style={{
          fontSize: u(11),
          lineHeight: u(14),
          gap: u(3),
        }}
      >
        <b className="text-ink font-bold">{rating}</b>
        <span>({reviews})</span>
        <StarIcon className="text-accent-dark" style={{ width: u(15), height: u(15) }} />
      </p>

      <div className="flex items-center">
        {avatars.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt=""
            width={SIZE}
            height={SIZE}
            className="shrink-0 rounded-full object-cover ring-2 ring-white"
            style={{
              width: u(SIZE),
              height: u(SIZE),
              marginLeft: i === 0 ? 0 : u(OVERLAP),
            }}
          />
        ))}

        <span
          className="bg-accent flex shrink-0 items-center justify-center rounded-full font-bold text-[#242528] ring-2 ring-white"
          style={{
            width: u(SIZE),
            height: u(SIZE),
            marginLeft: u(OVERLAP),
            fontSize: u(12),
            lineHeight: 1.5,
          }}
        >
          {extra}
        </span>
      </div>
    </div>
  );
}
