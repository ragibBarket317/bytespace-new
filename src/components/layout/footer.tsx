import Link from "next/link";
import { Logo } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { footerNav, legalNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="pt-16 pb-10 md:pt-20">
      <Container className="max-w-[1200px]">
        <div className="grid gap-12 lg:grid-cols-[380px_1fr] lg:gap-8">
          {/* Newsletter */}
          <div>
            <Link href="/" aria-label="ByteSpace home" className="text-ink inline-flex items-center gap-2">
              <Logo className="h-7 w-auto" />
            </Link>
            <p className="text-body mt-4 leading-6">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
            <form className="mt-6 flex items-start gap-[17px]">
              <label className="relative block h-[52px] flex-1">
                <span className="sr-only">Email address</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="border-line text-ink placeholder:text-muted h-full w-full rounded-(--radius-pill) border bg-white px-6 outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                />
              </label>
              <Button type="submit" size="md" className="h-[46px] shrink-0 px-6 text-base font-normal">
                Search
              </Button>
            </form>
            <p className="text-muted mt-4 max-w-[460px] text-sm leading-5">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from
              our company.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:justify-items-start">
            {footerNav.map((col, i) => (
              <ul key={i} className="space-y-4">
                {col.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-body hover:text-ink transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="border-line mt-16 flex flex-col items-center gap-4 border-t pt-6 sm:flex-row sm:justify-between">
          <p className="text-muted text-sm">
            @ {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-2">
            {legalNav.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-muted hover:text-ink text-sm transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
