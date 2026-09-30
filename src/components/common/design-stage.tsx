import { cn } from "@/lib/cn";

interface Props {
  width: number;
  height: number;
  className?: string; // --fit (available width) এখানে set করো
  style?: React.CSSProperties; // outer wrapper এ position/--fit বসাতে (width/height DesignStage নিজে নেয়)
  "aria-hidden"?: boolean;
  children: React.ReactNode;
}

// Figma এর fixed-size artboard (px) → responsive। ভিতরের সব child design px এ বসানো যায়।
// Available width `--fit` থেকে আসে; scale = min(design, fit) / design (atan2/tan দিয়ে length → number)।
export function DesignStage({ width, height, className, style, children, ...rest }: Props) {
  return (
    <div
      className={cn("relative", className)}
      style={
        {
          "--w": `min(${width}px, var(--fit, ${width}px))`,
          width: "var(--w)",
          height: `calc(var(--w) * ${height} / ${width})`,
          ...style,
        } as React.CSSProperties
      }
      {...rest}
    >
      <div
        className="absolute top-0 left-0 origin-top-left isolate"
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
