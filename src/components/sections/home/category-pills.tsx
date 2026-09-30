"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

export function CategoryPills({ rows }: { rows: string[][] }) {
  const [active, setActive] = useState("Featured");
  return (
    <div className="-mx-4 flex max-w-[1199px] flex-row gap-3 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:-mx-6 sm:px-6 md:mx-auto md:flex-col md:gap-[22px] md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden">
      {rows.map((row, i) => (
        <div
          key={i}
          className="flex items-center gap-3 max-md:contents md:flex-wrap md:justify-center md:gap-4 xl:flex-nowrap"
        >
          {row.map((label) => (
            <button
              key={label}
              type="button"
              aria-pressed={active === label}
              onClick={() => setActive(label)}
              className={cn(
                "h-[42px] shrink-0 rounded-(--radius-pill) px-4 whitespace-nowrap transition-colors",
                active === label
                  ? "bg-accent text-ink"
                  : "bg-surface-alt text-body hover:bg-line",
              )}
            >
              {label}
            </button>
          ))}
          {i === rows.length - 1 && (
            <button type="button" className="text-primary shrink-0 px-0.5 whitespace-nowrap">
              + More
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
