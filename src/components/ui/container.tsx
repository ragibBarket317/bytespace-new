import { cn } from "@/lib/cn";

// সব section এর content width একই রাখার জন্য
export function Container({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-(--container-page) px-4 sm:px-6", className)}
      {...props}
    />
  );
}
