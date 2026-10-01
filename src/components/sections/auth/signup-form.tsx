"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { u } from "@/lib/design-units";

const fields = [
  {
    name: "fullName",
    label: "Full Name",
    type: "text",
    placeholder: "Jamie Davis",
    autoComplete: "name",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "designer@example.com",
    autoComplete: "email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "********",
    autoComplete: "new-password",
  },
] as const;

export function SignupForm({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={cn(
        "flex flex-col justify-between gap-10 rounded-[24px] bg-white px-5 pt-8 pb-8 sm:px-10 sm:pt-12 sm:pb-10",
        "lg:h-[calc(784*var(--u))] lg:gap-0 lg:px-[calc(63*var(--u))] lg:pt-[calc(62*var(--u))] lg:pb-[calc(50*var(--u))]",
        className,
      )}
      style={style}
    >
      <div className="flex flex-col" style={{ gap: u(40) }}>
        <div>
          <p
            className="text-primary"
            style={{ fontSize: u(18), lineHeight: 1.6, height: u(28.8) }}
          >
            Create an Account
          </p>
          <h1 className="text-heading text-[34px] leading-[1.2] font-semibold tracking-[-0.01em] sm:text-[40px] lg:text-[length:calc(44*var(--u))]">
            Welcome to
            <br />
            ByteSpace
          </h1>
        </div>

        <form
          className="flex flex-col"
          style={{ gap: u(24) }}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {fields.map(({ name, label, type, placeholder, autoComplete }) => (
            <div key={name} className="flex flex-col" style={{ gap: u(8) }}>
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
                className="placeholder:text-subtle text-heading focus-visible:border-primary focus-visible:ring-primary w-full border border-[#E5E6E8] bg-white outline-none focus-visible:ring-1"
                style={{
                  height: u(52),
                  borderRadius: u(12),
                  padding: `${u(12)} ${u(24)}`,
                  fontSize: u(18),
                  lineHeight: 1.6,
                }}
              />
            </div>
          ))}

          <div className="flex justify-end">
            <Button
              type="submit"
              className="text-heading font-medium"
              style={{
                height: u(46),
                minWidth: u(123),
                padding: `${u(12)} ${u(24)}`,
                fontSize: u(18),
                lineHeight: 1.2,
                borderRadius: u(24),
              }}
            >
              Continue
            </Button>
          </div>
        </form>
      </div>

      <p
        className="text-text-secondary text-center"
        style={{ fontSize: u(16), lineHeight: 1.6 }}
      >
        Already have an account?{" "}
        <Link href="/login" className="text-primary hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}
