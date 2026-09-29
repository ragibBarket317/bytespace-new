import Link from "next/link";
import { Container } from "@/components/ui/container";
import { BagIcon, Logo } from "@/components/icons";
import { authNav, mainNav } from "@/config/navigation";

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 text-white">
      <Container className="grid h-20 max-w-[1248px] grid-cols-[1fr_auto_1fr] items-center md:h-[120px]">
        <Link href="/" aria-label="ByteSpace home" className="justify-self-start">
          <Logo className="h-7 w-auto md:h-[34px]" />
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

        <div className="col-start-3 flex items-center gap-6 justify-self-end font-light">
          {authNav.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/cart" aria-label="Cart" className="ml-1">
            <BagIcon className="h-[22px] w-5" />
          </Link>
        </div>
      </Container>
    </header>
  );
}
