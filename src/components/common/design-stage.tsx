import { cn } from "@/lib/cn";

interface Props {
  width: number;
  height: number;
  className?: string;
  children: React.ReactNode;
}

export function DesignStage({ width, height, className, children }: Props) {
  return (
    <div
      className={cn("relative", className)}
      style={
        {
          "--w": `min(${width}px, var(--fit, ${width}px))`,
          width: "var(--w)",
          height: `calc(var(--w) * ${height} / ${width})`,
        } as React.CSSProperties
      }
    >
      <div
        className="absolute top-0 left-0 isolate origin-top-left"
        style={
          {
            "--u": "1px",
            width,
            height,
            transform: `scale(calc(tan(atan2(var(--w), ${width}px))))`,
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    </div>
  );
}
