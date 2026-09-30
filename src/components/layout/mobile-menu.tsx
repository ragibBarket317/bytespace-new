"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BagIcon } from "@/components/icons";
import type { NavItem } from "@/types";

interface Props {
  nav: NavItem[];
  auth: NavItem[];
}

export function MobileMenu({ nav, auth }: Props) {
  const [open, setOpen] = useState(false);

  // Close the mobile menu on outside click
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="flex items-center gap-4 justify-self-end md:hidden">
      <Link href="/cart" aria-label="Cart" onClick={close}>
        <BagIcon className="h-[22px] w-5" />
      </Link>

      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="-mr-2 grid size-10 place-items-center"
      >
        <span className="relative block h-3.5 w-[22px]">
          <span
            className={`absolute left-0 h-0.5 w-full rounded bg-current transition-all duration-200 ${
              open ? "top-1.5 rotate-45" : "top-0"
            }`}
          />
          <span
            className={`absolute top-1.5 left-0 h-0.5 w-full rounded bg-current transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 h-0.5 w-full rounded bg-current transition-all duration-200 ${
              open ? "top-1.5 -rotate-45" : "top-3"
            }`}
          />
        </span>
      </button>

      <div
        id="mobile-menu"
        hidden={!open}
        className="bg-primary fixed inset-x-0 top-20 bottom-0 z-40 overflow-y-auto border-t border-white/15 px-4 py-6"
      >
        <nav aria-label="Mobile" className="flex flex-col">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={close}
              className="border-b border-white/15 py-4 text-xl font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 grid grid-cols-2 gap-3">
          {auth.map((item, i) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={close}
              className={
                i === auth.length - 1
                  ? "bg-accent text-ink inline-flex h-12 items-center justify-center rounded-(--radius-pill) font-medium"
                  : "inline-flex h-12 items-center justify-center rounded-(--radius-pill) border border-white/40 font-medium"
              }
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
