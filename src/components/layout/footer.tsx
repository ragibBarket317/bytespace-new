import Link from "next/link";

import { Logo } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { footerNav, legalNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="pt-12 pb-8 md:pt-[71px] md:pb-10">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-10 xl:grid-cols-[528px_580px] xl:gap-[80px]">
          {/* Newsletter */}
          <div className="flex flex-col">
            <div className="space-y-[16px]">
              <Link
                href="/"
                aria-label="ByteSpace home"
                className="text-ink inline-flex items-center"
              >
                <Logo className="h-auto w-[171px]" />
              </Link>
              <p className="text-[14px] leading-[160%] text-[#242528]">
                Stay Up to date with our latest features and releases by joining our
                newsletter.
              </p>
            </div>
            <div>
              <form className="mt-8 flex items-center gap-3 sm:gap-[24px] md:mt-[45px]">
                <label className="relative block h-[52px] w-[376px] max-w-[calc(100%-104px-12px)] min-w-0 shrink sm:max-w-[calc(100%-104px-24px)]">
                  <span className="sr-only">Email address</span>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="focus-visible:ring-primary/40 h-full w-full rounded-[100px] border border-[#CED0D3] bg-white px-6 py-[18px] text-[14px] leading-[160%] text-[#242528] outline-none placeholder:text-[#8A8A8A] focus-visible:ring-2"
                  />
                </label>

                <Button
                  type="submit"
                  size="md"
                  className="h-[46px] w-[104px] shrink-0 rounded-[24px] bg-[#D4FB20] px-6 text-[18px] leading-[120%] font-medium text-[#242528] hover:bg-[#D4FB20]"
                >
                  Search
                </Button>
              </form>

              <p className="mt-4 max-w-[504px] text-[12px] leading-[160%] text-[#242528] md:mt-[24px]">
                By subscribing, you agree to our Privacy Policy and consent to receive
                updates from our company.
              </p>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:mt-[48px]">
            {footerNav.map((col, i) => (
              <ul key={i} className="flex w-full flex-col gap-[16px] xl:w-[167px]">
                {col.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="hover:text-ink text-[14px] leading-[160%] text-[#242528] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-line mt-12 border-t md:mt-16 lg:mt-[130px]">
          <div className="mt-6 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left md:mt-[23px]">
            <p className="text-muted text-sm">
              @ {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>

            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:gap-x-8">
              {legalNav.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-muted hover:text-ink text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
