import { cn } from "@/lib/cn";
import { u } from "@/lib/design-units";

interface Props {
  title: string;
  period: string;
  amount: string;
  progress?: number;
  badge?: string;
  className?: string;
  style?: React.CSSProperties;
}

// Creator section stat card — Total Revenue / Year to Date component
export function RevenueCard({
  title,
  period,
  amount,
  progress,
  badge,
  className,
  style,
}: Props) {
  return (
    <div
      className={cn("bg-primary rounded-2xl text-left text-white", className)}
      style={{ padding: u(16), ...style }}
    >
      <p className="leading-none font-medium" style={{ fontSize: u(16) }}>
        {title}
      </p>
      <p className="leading-none opacity-90" style={{ fontSize: u(10), marginTop: u(4) }}>
        {period}
      </p>
      <p
        className="font-heading leading-none font-semibold tracking-tight"
        style={{ fontSize: u(24), marginTop: u(18) }}
      >
        {amount}
      </p>
      {progress !== undefined && (
        <div
          className="w-full overflow-hidden rounded-full bg-white"
          style={{ height: u(8), marginTop: u(14) }}
        >
          <div
            className="bg-accent h-full rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
      {badge && (
        <span
          className="bg-accent text-ink inline-flex items-center rounded-full font-medium"
          style={{
            height: u(23),
            padding: `0 ${u(9)}`,
            fontSize: u(11),
            marginTop: u(14),
          }}
        >
          {badge}
        </span>
      )}
    </div>
  );
}
