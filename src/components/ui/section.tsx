import { cn } from "@/lib/cn";
import { Container } from "./container";

interface SectionProps extends React.ComponentProps<"section"> {
  containerClassName?: string;
}

export function Section({
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn("py-16 md:py-24", className)} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
