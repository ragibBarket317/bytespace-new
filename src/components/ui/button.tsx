import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-(--radius-pill) font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        accent: "bg-accent text-ink hover:bg-accent-dark",
        primary: "bg-primary hover:bg-primary-dark text-white",
        outline: "border-line text-ink hover:bg-surface-alt border bg-transparent",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-12 px-8 text-base",
      },
    },
    defaultVariants: { variant: "accent", size: "md" },
  },
);

type ButtonProps = VariantProps<typeof buttonVariants> &
  (
    | ({ href: string } & Omit<React.ComponentProps<typeof Link>, "href">)
    | ({ href?: undefined } & React.ComponentProps<"button">)
  );

// if href render <Link>, otherwise <button> render
export function Button({ variant, size, className, ...props }: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);
  if ("href" in props && props.href !== undefined) {
    return <Link className={classes} {...(props as React.ComponentProps<typeof Link>)} />;
  }
  return <button className={classes} {...(props as React.ComponentProps<"button">)} />;
}
