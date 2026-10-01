import Image from "next/image";
import Link from "next/link";
import { SignupShowcase } from "@/components/sections/auth/signup-showcase";
import { siteConfig } from "@/config/site";
import { u } from "@/lib/design-units";

const LINE = "rgb(255 255 255 / 0.12)";
const gridStyle: React.CSSProperties = {
  backgroundImage: `linear-gradient(to right, ${LINE} calc(2 * var(--u)), transparent calc(2 * var(--u))), linear-gradient(to bottom, ${LINE} calc(2 * var(--u)), transparent calc(2 * var(--u)))`,
  backgroundSize: "calc(120 * var(--u)) calc(120 * var(--u))",
  backgroundPosition: "calc(50% + 60 * var(--u)) calc(118 * var(--u))",
};

interface Props {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function AuthLayout({ title, description, children }: Props) {
  return (
    <main
      className="bg-primary relative min-h-dvh overflow-hidden [--u:1px] lg:[--u:max(calc(min(100vw,1440px)/1440),0.5px)]"
      style={gridStyle}
    >
      <div className="relative mx-auto flex w-full max-w-[640px] flex-col gap-8 px-4 py-8 lg:block lg:h-[calc(1024*var(--u))] lg:w-[calc(1440*var(--u))] lg:max-w-none lg:p-0">
        <Link
          href="/"
          aria-label={`${siteConfig.name} home`}
          className="block lg:absolute lg:top-[calc(35*var(--u))] lg:left-[calc(122*var(--u))]"
          style={{ width: u(28.875), height: u(31.5) }}
        >
          <Image
            src="/images/auth/logo-mark.png"
            alt=""
            width={29}
            height={32}
            priority
            className="size-full max-w-none"
          />
        </Link>

        <div
          className="text-surface-alt lg:absolute lg:top-[calc(120*var(--u))] lg:left-[calc(122*var(--u))] lg:w-[calc(475*var(--u))]"
          style={{ display: "flex", flexDirection: "column", gap: u(16) }}
        >
          <h2
            className="font-heading font-semibold text-[#F5F5F6]"
            style={{ fontSize: u(20), lineHeight: 1.2, letterSpacing: "-0.01em" }}
          >
            {title}
          </h2>
          <p style={{ fontSize: u(18), lineHeight: 1.6 }}>{description}</p>
        </div>

        <div className="lg:absolute lg:top-[calc(120*var(--u))] lg:left-[calc(741*var(--u))] lg:h-[calc(784*var(--u))] lg:w-[calc(579*var(--u))]">
          {children}
        </div>

        <SignupShowcase className="mx-auto [--fit:min(calc(100vw_-_32px),548px)] lg:absolute lg:top-[calc(305*var(--u))] lg:left-[calc(97*var(--u))] lg:mx-0 lg:[--fit:calc(548*var(--u))]" />
      </div>
    </main>
  );
}
