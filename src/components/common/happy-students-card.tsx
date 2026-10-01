import Image from "next/image";
import { StarIcon } from "@/components/icons";
import { studentAvatars } from "@/data/home";
import { cn } from "@/lib/cn";
import { u } from "@/lib/design-units";

interface Props {
  rating?: number;
  reviews?: number;
  extra?: string; // "2K+" bubble
  avatars?: string[];
  /** white = hero card (default), lime = signup page card (শুধু background/star/ring color বদলায়) */
  tone?: "white" | "lime";
  /** avatar circle size / overlap (design px) — signup card এ 42 / -14.86 */
  avatarSize?: number;
  avatarOverlap?: number;
  className?: string;
  style?: React.CSSProperties;
}

const DEFAULT_SIZE = 40;
const DEFAULT_OVERLAP = -13.5;

export function HappyStudentsCard({
  rating = 4.5,
  reviews = 240,
  extra = "2K+",
  avatars = studentAvatars,
  tone = "white",
  avatarSize: SIZE = DEFAULT_SIZE,
  avatarOverlap: OVERLAP = DEFAULT_OVERLAP,
  className,
  style,
}: Props) {
  const isLime = tone === "lime";
  const ringClass = isLime ? "ring-0" : "ring-white"; // Figma lime card এ avatar এর মাঝে ring নেই

  return (
    <div
      className={cn(
        "flex flex-col rounded-[16px] text-left",
        isLime ? "bg-accent" : "bg-white shadow-(--shadow-float) backdrop-blur-[20px]",
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
        <StarIcon className={isLime ? "text-primary" : "text-accent-dark"} style={{ width: u(15), height: u(15) }} />
      </p>

      <div className="flex items-center">
        {avatars.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt=""
            width={SIZE}
            height={SIZE}
            className={cn("shrink-0 rounded-full object-cover ring-2", ringClass)}
            style={{
              width: u(SIZE),
              height: u(SIZE),
              marginLeft: i === 0 ? 0 : u(OVERLAP),
            }}
          />
        ))}

        <span
          className={cn(
            "flex shrink-0 items-center justify-center rounded-full font-bold ring-2",
            isLime ? "bg-heading text-white" : "bg-accent text-[#242528]",
            ringClass,
          )}
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
