import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { u } from "@/lib/design-units";

export function AuthCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex h-full flex-col justify-between gap-10 rounded-[24px] bg-white px-5 pt-8 pb-8 sm:px-10 sm:pt-12 sm:pb-10",
        "lg:gap-0 lg:px-[calc(63*var(--u))] lg:pt-[calc(62*var(--u))] lg:pb-[calc(50*var(--u))]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function AuthHeading({
  tagline,
  title,
}: {
  tagline: string;
  title: React.ReactNode;
}) {
  return (
    <div>
      <p
        className="text-primary"
        style={{ fontSize: u(18), lineHeight: 1.6, height: u(28.8) }}
      >
        {tagline}
      </p>
      <h1 className="text-heading text-[34px] leading-[1.2] font-semibold tracking-[-0.01em] sm:text-[40px] lg:text-[length:calc(44*var(--u))]">
        {title}
      </h1>
    </div>
  );
}

interface FieldProps {
  name: string;
  label: string;
  type: "text" | "email" | "password";
  placeholder: string;
  autoComplete: string;
}

export function AuthField({ name, label, type, placeholder, autoComplete }: FieldProps) {
  return (
    <div className="flex flex-col" style={{ gap: u(8) }}>
      <label
        htmlFor={name}
        className="text-heading font-medium"
        style={{ fontSize: u(14), lineHeight: 1.2 }}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        minLength={type === "password" ? 8 : undefined}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="focus-visible:border-primary focus-visible:ring-primary text-heading w-full border border-[#E5E6E8] bg-white outline-none placeholder:text-[#82868E] focus-visible:ring-1"
        style={{
          height: u(52),
          borderRadius: u(12),
          padding: `${u(12)} ${u(24)}`,
          fontSize: u(18),
          lineHeight: 1.6,
        }}
      />
    </div>
  );
}

export function AuthSubmit({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-end">
      <Button
        type="submit"
        className="text-heading font-medium"
        style={{
          height: u(46),
          padding: `${u(12)} ${u(24)}`,
          fontSize: u(18),
          lineHeight: 1.2,
          borderRadius: u(24),
        }}
      >
        {children}
      </Button>
    </div>
  );
}

// "Already have an account? Login" / "New user? Create an account"
export function AuthSwitch({
  text,
  linkLabel,
  href,
  className,
}: {
  text: string;
  linkLabel: string;
  href: string;
  className?: string;
}) {
  return (
    <p
      className={cn("text-center", className)}
      style={{ fontSize: u(16), lineHeight: 1.6 }}
    >
      {text}{" "}
      <Link href={href} className="text-primary hover:underline">
        {linkLabel}
      </Link>
    </p>
  );
}
