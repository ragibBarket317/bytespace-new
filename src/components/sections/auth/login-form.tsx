"use client";

import {
  AuthCard,
  AuthField,
  AuthHeading,
  AuthSubmit,
  AuthSwitch,
} from "@/components/sections/auth/auth-form-parts";
import { FacebookIcon, GoogleIcon } from "@/components/icons";
import { u } from "@/lib/design-units";

const fields = [
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
    autoComplete: "current-password",
  },
] as const;

const socials = [
  { label: "Continue with Facebook", Icon: FacebookIcon },
  { label: "Continue with Google", Icon: GoogleIcon },
] as const;

export function LoginForm() {
  return (
    <AuthCard className="lg:pb-[calc(40*var(--u))]">
      <div>
        <div className="flex flex-col" style={{ gap: u(40) }}>
          <AuthHeading tagline="Sign In" title="Welcome Back" />

          <form
            className="flex flex-col"
            style={{ gap: u(24) }}
            onSubmit={(e) => {
              e.preventDefault();
              // TODO: login API এর সাথে connect করো
            }}
          >
            {fields.map((f) => (
              <AuthField key={f.name} {...f} />
            ))}
            <AuthSubmit>Sign In</AuthSubmit>
          </form>
        </div>

        <div
          className="mt-8 flex items-center lg:mt-[calc(74*var(--u))] lg:w-[calc(439*var(--u))]"
          style={{ gap: u(12) }}
        >
          <span className="flex-1 bg-[#E8E8E8]" style={{ height: u(2) }} />
          <span className="text-[#888888]" style={{ fontSize: u(16), lineHeight: 1.6 }}>
            or
          </span>
          <span className="flex-1 bg-[#E8E8E8]" style={{ height: u(2) }} />
        </div>

        <div
          className="mt-6 flex justify-center lg:mt-[calc(42*var(--u))]"
          style={{ gap: u(16) }}
        >
          {socials.map(({ label, Icon }) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              className="hover:bg-surface-alt flex items-center justify-center border border-[#D1D1D1] bg-white text-black transition-colors"
              style={{ width: u(72), height: u(72), borderRadius: u(24) }}
            >
              <Icon className="size-[calc(34*var(--u))]" />
            </button>
          ))}
        </div>
      </div>

      <AuthSwitch
        text="New user?"
        linkLabel="Create an account"
        href="/signup"
        className="text-[#888888]"
      />
    </AuthCard>
  );
}
