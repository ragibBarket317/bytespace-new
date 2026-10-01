import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { BagIcon } from "@/components/icons";
import { authNav, mainNav } from "@/config/navigation";
import { MobileMenu } from "./mobile-menu";

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 text-white">
      <Container className="grid h-20 max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center md:h-[120px] md:px-[clamp(24px,8.4722vw,122px)]">
        <Link
          href="/"
          aria-label="ByteSpace home"
          className="justify-self-start md:mt-[35px] md:self-start"
        >
          <Image
            src="/images/common/header-logo.png"
            alt="ByteSpace"
            width={171}
            height={37}
            priority
            className="h-7 w-auto md:h-[37px] md:w-[171px]"
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-6 md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={item.href === "/" ? "font-medium" : "font-light"}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Tablet + Desktop */}
        <div className="col-start-3 hidden items-center gap-6 justify-self-end font-light md:flex">
          {authNav.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/cart" aria-label="Cart" className="ml-1">
            <BagIcon className="h-[22px] w-5" />
          </Link>
        </div>

        {/* Mobile — hamburger + dropdown */}
        <div className="col-start-3 justify-self-end md:hidden">
          <MobileMenu nav={mainNav} auth={authNav} />
        </div>
      </Container>
    </header>
  );
}
