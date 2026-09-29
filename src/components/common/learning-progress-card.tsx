import { cn } from "@/lib/cn";
import { u } from "@/lib/design-units";

interface Props {
  value: number; // 0-100
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}

// Hero and Growth section
export function LearningProgressCard({
  value,
  label = "Learning Progress",
  className,
  style,
}: Props) {
  const pct = Math.min(100, Math.max(0, value));

  return (
    <div
      className={cn(
        "flex flex-col justify-center rounded-[16px] bg-white text-left shadow-(--shadow-float) backdrop-blur-[20px]",
        className,
      )}
      style={{
        padding: u(16),
        gap: u(8),
        ...style,
      }}
    >
      <p
        className="font-medium text-[#242528]"
        style={{
          fontSize: u(14),
          lineHeight: 1.2,
        }}
      >
        {label}
      </p>

      <p
        className="font-heading font-semibold text-[#242528]"
        style={{
          fontSize: u(48),
          lineHeight: 1.2,
          letterSpacing: u(-0.48),
        }}
      >
        {pct}%
      </p>

      <div
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
        className="bg-surface-alt w-full overflow-hidden rounded-[24px]"
        style={{
          height: u(8),
        }}
      >
        <div className="bg-accent h-full rounded-[24px]" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
